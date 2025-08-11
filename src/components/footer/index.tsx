import type { JSX } from 'react';
import { SvgItems, type ElementSvg } from '../../assets/svg/ListaSvg'

import './styles.scss'
import { Logo } from '../../common/logo';
import { ParagraphFooter } from './paragraph';

export const Footer=()=> {

  function renderIconSpan(items: ElementSvg[],  targetName: string): JSX.Element | null {

  const foundItem = items.find((el) => el.name === targetName);
  if (!foundItem) return null;

  return <>{foundItem.svg}</>;
}


  return (
    <>
        <footer className="flexCenter col-12">
          <div className="boxContainer footerContainer">
            <Logo svg={renderIconSpan(SvgItems,'LogoWhite')}/>  
            <ParagraphFooter/>
          </div>
        </footer>
    </>
  )
}

