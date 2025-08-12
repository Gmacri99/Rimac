import './styles.scss'
import { Logo } from '../../common/logo';
import { useScreenSize } from '../../hooks/useScreen';
import { Line } from '../../common/linea';
import { renderIconSpan } from '../../helpers/funciones';

export const Footer=()=> {

  const { width } = useScreenSize();




  return (
    <>
        <footer className="flexCenter col-12">
          <div className="boxContainer footerContainer">
            <Logo svg={renderIconSpan(width > 992 ? 'LogoWhite' : 'LogoWhiteMobile')} component='footer'/>  
            {width < 992 ? <Line color='morado'/> : null}
            <p>© 2023 RIMAC Seguros y Reaseguros.</p>
          </div>
        </footer>
    </>
  )
}

