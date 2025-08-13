import { Modal } from '../../common/modal'
import { useFormularioUsuario } from '../../hooks/useHandleForm'
import { useAuthRedirect } from '../../hooks/useAuthRedirect'
import { SeguroCabecera } from './InfoSeguro/cabecera'
import { FormularioSeguro } from './InfoSeguro/formulario'
import './styles.scss'
import family from '/Family.webp'
import gradient from '/blur-asset.png'
import gradientBlue from '/molecule-blur-asset.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const Seguro=()=> {
  
  useAuthRedirect();

  const {modalState}=useFormularioUsuario()

  const FigureRef = useRef(null);
  const TitleRef = useRef(null);

  useEffect(() => {

    gsap.set(FigureRef.current, { scale: .9, opacity:0 });
    gsap.set(TitleRef.current, { opacity: .5, x: 20 });

    gsap.to(FigureRef.current, {
      scale: 1,
      opacity: 1, 
      duration: 2,
      ease: "power4.out",
    });

    gsap.to(TitleRef.current, {
      opacity: 1,
      x: 0, 
      duration: 2,
      ease: "power4.out",
    });

  }, []);
  

  return (
    <>
      <div className='flexCenter col-12 pageSeguro'>
        <figure  className='containerSeguro__gradient containerSeguro__gradient--violet'>
          <img src={gradient} alt="violet-blur" />
        </figure>
        <figure className='containerSeguro__gradient containerSeguro__gradient--blue'>
          <img src={gradientBlue} alt="blue-blur" />
        </figure>
        <div className='boxContainer containerSeguro'>
          <figure ref={FigureRef} className='containerSeguro__figureSeguro'>
            <img src={family} alt="familia" />
          </figure>
          <div ref={TitleRef} className='containerSeguro__infoSeguro'>
            <SeguroCabecera/>
            <FormularioSeguro/>
          </div>
        </div>
      </div>

      <Modal state={modalState==='success' ? true : modalState==='error' ? false : false} active={modalState === 'inactive' ? false : true}/>
    </>
  )
}

