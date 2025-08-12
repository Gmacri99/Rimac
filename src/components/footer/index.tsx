import type { JSX } from 'react';
import { SvgItems, type ElementSvg } from '../../assets/svg/ListaSvg'

import './styles.scss'
import { Logo } from '../../common/logo';
import { useScreenSize } from '../../hooks/useScreen';
import { Line } from '../../common/line';

export const Footer=()=> {

  const { width } = useScreenSize();

  function renderIconSpan(items: ElementSvg[],  targetName: string): JSX.Element | null {

  const foundItem = items.find((el) => el.name === targetName);
  if (!foundItem) return null;

  return <>{foundItem.svg}</>;
}


  return (
    <>
        <footer className="flexCenter col-12">
          <div className="boxContainer footerContainer">
            <Logo svg={renderIconSpan(SvgItems, width > 992 ? 'LogoWhite' : 'LogoWhiteMobile')} component='footer'/>  
            {width < 992 ? <Line color='morado'/> : null}
            <p>© 2023 RIMAC Seguros y Reaseguros.</p>
          </div>
        </footer>
    </>
  )
}

