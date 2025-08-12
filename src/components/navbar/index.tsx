import './styles.scss'
import { Contact } from './contacto';
import { Logo } from '../../common/logo';
import { renderIconSpan } from '../../helpers/funciones';

export const Navbar=()=> {



  return (
      <nav className="flexCenter col-12">
        <div className='boxContainer containerNav'>
          <Logo svg={renderIconSpan('LogoRed') } component='navbar'/>  
          <Contact/>  
        </div>
      </nav>
  )
}

