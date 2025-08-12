import type { JSX } from 'react';
import { SvgItems, type ElementSvg } from '../../assets/svg/ListaSvg'
import './styles.scss'
import { Contact } from './contacto';
import { Logo } from '../../common/logo';

export const Navbar=()=> {

  function renderIconSpan(items: ElementSvg[],  targetName: string): JSX.Element | null {

  const foundItem = items.find((el) => el.name === targetName);
  if (!foundItem) return null;

  return <>{foundItem.svg}</>;
}


  return (
      <nav className="flexCenter col-12">
        <div className='boxContainer containerNav'>
          <Logo svg={renderIconSpan(SvgItems,'LogoRed') } component='navbar'/>  
          <Contact/>  
        </div>
      </nav>
  )
}

