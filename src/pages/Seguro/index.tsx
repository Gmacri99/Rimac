import { Modal } from '../../common/modal'
import { renderIconSpan } from '../../helpers/funciones'
import { useFormularioUsuario } from '../../hooks/useHandleForm'
import { useAuthRedirect } from '../../hooks/useRedirect'
import { SeguroCabecera } from './InfoSeguro/cabecera'
import { FormularioSeguro } from './InfoSeguro/formulario'
import './styles.scss'
import family from '/Family.webp'
import gradient from '/blur-asset.png'
import gradientBlue from '/molecule-blur-asset.png'

export const Seguro=()=> {
  
  useAuthRedirect();

  const {modalState}=useFormularioUsuario()

  
  

  return (
    <>
      <div className='flexCenter col-12 pageSeguro'>
        <figure className='containerSeguro__gradient containerSeguro__gradient--violet'>
          <img src={gradient} alt="violet-blur" />
        </figure>
        <figure className='containerSeguro__gradient containerSeguro__gradient--blue'>
          <img src={gradientBlue} alt="blue-blur" />
        </figure>
        <div className='boxContainer containerSeguro'>
          <figure className='containerSeguro__figureSeguro'>
            <img src={family} alt="familia" />
          </figure>
          <div className='containerSeguro__infoSeguro'>
            <SeguroCabecera/>
            <FormularioSeguro/>
          </div>
        </div>
      </div>

      <Modal state={modalState==='success' ? true : modalState==='error' ? false : false} active={modalState === 'inactive' ? false : true}/>
    </>
  )
}

