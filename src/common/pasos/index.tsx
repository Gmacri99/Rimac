import { renderIconSpan } from '../../helpers/funciones'
import { BtnBack } from '../btnBack'
import './styles.scss'

type Props = {
  pasoNumber:number,
}

export const Pasos=({pasoNumber}:Props)=> {

  return (
    <div className='flexCenter col-12 Container--bg'>
      <div className='boxContainer PasosContainerDesktop flexCenter'>
          <div className={`PasosContainerDesktop__paso ${pasoNumber === 1 ? 'PasosContainerDesktop__paso--active' : 'PasosContainerDesktop__paso--inactive'} flexCenter`}>
          <span className='flexCenter'>1</span>
          <p>Planes y coberturas</p>
          </div>
          <span className='PasosContainerDesktop__paso__spanSvg flexCenter'>{renderIconSpan('PasoSvg')}</span>
          <div className={`PasosContainerDesktop__paso ${pasoNumber === 2 ? 'PasosContainerDesktop__paso--active' : 'PasosContainerDesktop__paso--inactive'} flexCenter`}>
          <span className='flexCenter'>2</span>
          <p>Resumen</p>
          </div>
      </div>
      <div className='boxContainer PasosContainerMobile flexCenter'>
        <BtnBack name='BackSvgRosa'/>
        <p>paso {pasoNumber} de 2</p>
        <div><span className={`${pasoNumber === 1 ? 'PasosContainerMobile__span--10' : 'PasosContainerMobile__span--100'}`}></span></div>
      </div>
    </div>
  )
}

