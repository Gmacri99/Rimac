import './styles.scss'
import { renderIconSpan } from '../../helpers/funciones';

type Props = {
  svg:string,
  name:string,
  text:string,
  onClick?: () => void,
  state:boolean
}

export const Card=({onClick,svg,name,text,state}:Props)=> {


  return (
  <>
    <div onClick={onClick} className={`Card Card__containerOption ${state ? 'Card__containerOption--Checked' : ''}`}>
        <button aria-label='Checked button' className={`Card__containerOption__containerButtonChecked flexCenter ${state ? 'Card__containerOption__containerButtonChecked--active' : 'Card__containerOption__containerButtonChecked--inactive'}`}>{renderIconSpan('CheckedSvg')}</button>
        <span className='Card__containerOption__span'>{renderIconSpan(svg)}</span>
        <p className='Card__containerOption__title'>{name}</p>
        <div className='Card__containerOption__containerParagraph'> <p> {text}</p> </div>
    </div>
  </>
  )
}

