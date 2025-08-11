import type { JSX } from 'react';
import { SvgItems, type ElementSvg } from '../../../assets/svg/ListaSvg';
import './styles.scss'

export const Contact=()=> {

  function renderIconSpan(items: ElementSvg[],  targetName: string): JSX.Element | null {

  const foundItem = items.find((el) => el.name === targetName);
  if (!foundItem) return null;

  return <>{foundItem.svg}</>;
}


  return (
    <div className='col-lg-5 col-xl-3 col-xxl-3 containerNav__infoContainer'>
      <p className='containerNav__infoContainer__text'>¡Compra por este medio!</p>
      <div className='containerNav__infoContainer__phoneContainer'> 
        <span>{renderIconSpan(SvgItems,'BlackPhone')}</span>
        <p>(01) 411 6001</p>
      </div>
    </div>
  )
}

