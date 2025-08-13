import { Link} from 'react-router-dom'
import './styles.scss'
import { renderIconSpan } from '../../../../helpers/funciones'
import { useFormularioUsuario } from '../../../../hooks/useHandleForm'



export const FormularioSeguro=()=> {

  
    const {formData,valid,focus,comunicaciones,privacidad,handleChange,handleCheck,onSubmit,setFocus,}=useFormularioUsuario()

    


  return (
    <form className='FormSeguro' onSubmit={onSubmit}>
      <div className='FormSeguro__containerIdentificacion flexCenter'>
        <div className='FormSeguro__containerIdentificacion__containerSelect flexCenter'>
          <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} required>
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
          </select>
          {renderIconSpan('SelectDropdown')}
        </div>
        <div className={`FormSeguro__containerSelect__containerInput flexCenter ${focus.nroDocumento && valid.nroDocumento ? 'FormSeguro__containerTelefono--selected' : ''} ${focus.nroDocumento && !valid.nroDocumento ? 'FormSeguro__containerTelefono--error' : ''}`}>
          <label htmlFor="nroDocumento">Nro. de documento</label>
          <input name='nroDocumento' placeholder='30216147' type="text" value={formData.nroDocumento} onChange={handleChange} onFocus={() => setFocus((prev) => ({ ...prev, nroDocumento: true }))} onBlur={() => setFocus((prev) => ({ ...prev, nroDocumento: false }))} required/>
        </div>
      </div>
      <div   className={`FormSeguro__containerTelefono flexCenter ${focus.celular && valid.celular ? 'FormSeguro__containerTelefono--selected' : ''} ${focus.celular && !valid.celular ? 'FormSeguro__containerTelefono--error' : ''}`}>
        <label htmlFor="celular">Celular</label>
        <input name='celular' placeholder='5130216147' type="text" value={formData.celular} onChange={handleChange} onFocus={() => setFocus((prev) => ({ ...prev, celular: true }))} onBlur={() => setFocus((prev) => ({ ...prev, celular: false }))} required/>
      </div>
      <div className='FormSeguro__containerCheck flexCenter'>
        <button aria-label='Politicas check' onClick={(e)=>handleCheck(e,'privacidad')} className={`flexCenter ${privacidad ? 'FormSeguro__containerCheck--activeBtn' : 'FormSeguro__containerCheck--inactiveBtn'}`}>{renderIconSpan('CheckedSvg')}</button>
        <p>Acepto lo Política de Privacidad</p>
      </div>
      <div className='FormSeguro__containerCheck flexCenter'>
        <button aria-label='Politicas Comunicaciones check' onClick={(e)=>handleCheck(e,'comunicaciones')} className={`flexCenter ${comunicaciones ? 'FormSeguro__containerCheck--activeBtn' : 'FormSeguro__containerCheck--inactiveBtn'}`}>{renderIconSpan('CheckedSvg')}</button>
        <p>Acepto la Política Comunicaciones Comerciales</p>
      </div>
      <Link className='FormSeguro__link' target='_blank' to='/terminos'>Aplican Términos y Condiciones.</Link>
      <button  onClick={onSubmit} className='FormSeguro__button FormSeguro__button--dark'>
        <span className='FormSeguro__button__spanInactive'>Cotiza aquí</span>
        <span className='FormSeguro__button__spanActive'>Cotiza aquí</span>
      </button>
    </form>
  )
}

