import type { Usuario } from "../../../../../const/user";
import type { DatosUsuario, ValidacionProps, ValidacionResultado } from "./interfaces";



export const validarUsuario = (formData: DatosUsuario, usuario: typeof Usuario): boolean => {
    return (
      formData.tipoDocumento === usuario.TipoDocumento &&
      String(formData.nroDocumento) === usuario.NroDocumento &&
      formData.celular === usuario.Celular
    );
};

export const validarCampos = ({ nroDocumento, celular, comunicaciones, privacidad }: ValidacionProps, regexDocumento: RegExp, regexCelular: RegExp): ValidacionResultado => {
    if (!regexDocumento.test(String(nroDocumento))) {
      return { valido: false, mensaje: 'Número de documento inválido' };
    }

    if (!regexCelular.test(celular)) {
      return { valido: false, mensaje: 'Número de celular inválido' };
    }

    if (!comunicaciones) {
      return { valido: false, mensaje: 'Debe aceptar la política de comunicaciones' };
    }
    
    if (!privacidad) {
      return { valido: false, mensaje: 'Debe aceptar la política de privacidad' };
    }

    return { valido: true };
};

