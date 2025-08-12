import './styles.scss'
import { renderIconSpan } from '../../helpers/funciones';

type Props = {
  svg:string,
  name:string,
  text:string
}

export const Card=({svg,name,text}:Props)=> {


  return (
  <>
    <div>
        <button>{renderIconSpan(svg)}</button>
        <span>{renderIconSpan(svg)}</span>
        <p>{name}</p>
        <p>{text}</p>
    </div>
  </>
  )
}

