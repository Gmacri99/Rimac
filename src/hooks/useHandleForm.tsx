import { useNavigate } from "react-router-dom";
import { useDataContext, type ApiResponse } from "../context/context";
import { useEffect, useState } from "react";
import type { DatosUsuario, InputState } from "../pages/Seguro/InfoSeguro/formulario/logica/interfaces";
import { regexCelular, regexDocumento } from "../pages/Seguro/InfoSeguro/formulario/logica/Regex";
import { validarCampos, validarUsuario } from "../pages/Seguro/InfoSeguro/formulario/logica/validaciones";
import { Usuario } from "../const/user";
import { apiRequest } from "../helpers/ApiRequest";

export const useFormularioUsuario = () => {
    const { setData, modalState, setModalState } = useDataContext();
    const navigate = useNavigate();
    const [comunicaciones,setComunicaciones] = useState<boolean>(false)
    const [privacidad,setPrivacidad] = useState<boolean>(false)
    

    const [focus, setFocus] = useState<InputState>({
      nroDocumento: false,
      celular: false
    });

    const [valid, setValid] = useState<InputState>({
      nroDocumento: true,
      celular: true
    });

    const [formData, setFormData] = useState<DatosUsuario>({
      tipoDocumento: 'DNI' ,
      nroDocumento: '',
      celular: '',
    });

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;

      if (name === 'nroDocumento') {
        setValid((prev) => ({ ...prev, nroDocumento: regexDocumento.test(value) }));
      }
    
      if (name === 'celular') {
        setValid((prev) => ({ ...prev, celular: regexCelular.test(value) }));
      }

      setFormData((prev) => ({...prev,[name]: name === 'nroDocumento' ? value : value}));
    };

    const handleCheck = (event:React.MouseEvent<HTMLButtonElement>,name:string) => {
      event.preventDefault()
      switch (name) {
        case 'comunicaciones':
          setComunicaciones(prev => !prev);
        break;
        case 'privacidad':
          setPrivacidad(prev => !prev);
        break;
      }
    }

    useEffect(() => {
  if (modalState === 'inactive') return; // si está inactivo, no hace nada
      
  const timer = setTimeout(() => {
    setModalState('inactive');
  }, 3000);

  return () => clearTimeout(timer); // limpia el timeout si modalState cambia o componente se desmonta
}, [modalState]);


    const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      const resultado = validarCampos({nroDocumento: formData.nroDocumento, celular: formData.celular, comunicaciones, privacidad,},regexDocumento, regexCelular);
      
      if (!resultado.valido) {
        setModalState('error');
        setTimeout(() => setModalState('inactive'), 3000);
        return;
      }

      const usuarioValido = validarUsuario(formData, Usuario);

      if (!usuarioValido) {
        setModalState('error');
        setTimeout(() => setModalState('inactive'), 3000);
        return;
      }

      try {
        const response = await apiRequest('getUser');
        const dataResponse:ApiResponse={
            birthDay: response.birthDay,
            lastName: response.lastName,
            name: response.name,
            TipoDocumento: formData.tipoDocumento,
            NroDocumento: formData.nroDocumento.toString(),
            celular: '+51' + formData.celular
        }
        setData(dataResponse);
      
        setModalState('success');

        setTimeout(() => {
          setModalState('inactive');
          navigate('/planes');
        }, 3000);
      } 
      catch (error) {
        setModalState('error');

        setTimeout(() => {
          setModalState('inactive');
        }, 3000);
      }

    };

  return {
    formData,
    valid,
    focus,
    comunicaciones,
    privacidad,
    handleChange,
    handleCheck,
    onSubmit,
    setFocus,
    setComunicaciones,
    setPrivacidad,
    modalState
  };
}