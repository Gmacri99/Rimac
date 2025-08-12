import { Line } from '../../../../common/linea';
import { useScreenSize } from '../../../../hooks/useScreen';
import './styles.scss'
import family from '/Family.webp'

export const SeguroCabecera=()=> {

    
    const { width } = useScreenSize();

  return (
    <>
      <div className='SeguroCabecera'>
        {width > 840 ? 
        <>
            <span className='SeguroCabecera__promo'>Seguro Salud Flexible</span>
            <h1 className='SeguroCabecera__title'>Creado para ti y tu familia</h1>
        </>
        :
        <div className='SeguroCabecera__containerTitle'>
            <div className='SeguroCabecera__containerTitle__containerText'>
                <span className='SeguroCabecera__promo'>Seguro Salud Flexible</span>
                <h1 className='SeguroCabecera__title'>Creado para ti y tu familia</h1>
            </div>
            <div className='SeguroCabecera__containerTitle__containerImagen'>
                <figure className='SeguroCabecera__imagen'>
                    <img src={family} alt="familia" />
                </figure>
            </div>
        </div>}
        {width > 840 ? null : <Line color='gris'/>}
        <h6 className='SeguroCabecera__subtitle'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</h6>
      </div>
    </>
  )
}

