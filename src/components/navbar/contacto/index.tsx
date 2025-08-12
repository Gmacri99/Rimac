import './styles.scss'
import { renderIconSpan } from '../../../helpers/funciones';

export const Contact=()=> {


  return (
    <div className='col-lg-5 col-xl-4 col-xxl-4 containerNav__infoContainer'>
      <p className='containerNav__infoContainer__text'>¡Compra por este medio!</p>
      <div className='containerNav__infoContainer__phoneContainer'> 
        <span>{renderIconSpan('BlackPhone')}</span>
        <p>(01) 411 6001</p>
      </div>
    </div>
  )
}

