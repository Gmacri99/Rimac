import './styles.scss'
import { renderIconSpan } from '../../helpers/funciones'

type Props = {
  state:boolean,
  active:boolean
}

export const Modal=({state,active}:Props)=> {

  return (
    <>
    <div className={`shadowContainer shadowContainer--${active ? 'active' : 'inactive'}`}>
      <div className={`modalContainer modalContainer--${active ? 'active' : 'inactive'} flexCenter modalContainer--${state ? 'success' : 'error'}`}>
        <span className='flexCenter'>{renderIconSpan(state ? 'CheckedSvg' : 'ErrorSvg')}</span>
        <p>{state ? 'Inicio de sesión exitoso!' : 'Error al iniciar sesión'}</p>
      </div>
    </div>
    </>
  )
}

