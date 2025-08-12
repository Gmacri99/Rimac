import { Link } from 'react-router-dom'
import './styles.scss'
import { renderIconSpan } from '../../../../helpers/funciones'
import { useState } from 'react'

export const FormularioSeguro=()=> {

    const [comunicaciones,setComunicaciones] = useState<boolean>(false)
    const [privacidad,setPrivacidad] = useState<boolean>(false)

    const handleChange = (event:React.MouseEvent<HTMLButtonElement>,name:string) => {
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

  return (
    <form className='FormSeguro'>

      <div className='FormSeguro__containerIdentificacion flexCenter'>
        <div className='FormSeguro__containerIdentificacion__containerSelect flexCenter'>
          <select name="" id="">
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
          </select>
          {renderIconSpan('SelectDropdown')}
        </div>
        <div className='FormSeguro__containerSelect__containerInput flexCenter'>
          <label htmlFor="Celular">Nro. de documento</label>
          <input name='Celular' placeholder='5130216147' type="text" />
        </div>
      </div>
      <div className='FormSeguro__containerTelefono flexCenter'>
        <label htmlFor="Celular">Celular</label>
        <input name='Celular' placeholder='5130216147' type="text" />
      </div>
      <div className='FormSeguro__containerCheck flexCenter'>
        <button onClick={(e)=>handleChange(e,'privacidad')} className={`flexCenter ${privacidad ? 'FormSeguro__containerCheck--activeBtn' : 'FormSeguro__containerCheck--inactiveBtn'}`}>{renderIconSpan('CheckedSvg')}</button>
        <p>Acepto lo Política de Privacidad</p>
      </div>
      <div className='FormSeguro__containerCheck flexCenter'>
        <button onClick={(e)=>handleChange(e,'comunicaciones')} className={`flexCenter ${comunicaciones ? 'FormSeguro__containerCheck--activeBtn' : 'FormSeguro__containerCheck--inactiveBtn'}`}>{renderIconSpan('CheckedSvg')}</button>
        <p>Acepto la Política Comunicaciones Comerciales</p>
      </div>
      <Link className='FormSeguro__link' target='_blank' to='/terminos'>Aplican Términos y Condiciones.</Link>
      <button className='FormSeguro__button FormSeguro__button--dark'>Cotiza aquí</button>
    </form>
  )
}

