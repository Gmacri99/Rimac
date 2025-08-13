import { renderIconSpan } from '../../helpers/funciones'
import './styles.scss'

type Props = {
  name:string,
  text?:string,
  clase?:string,
  onClick?: () => void;
}

export const BtnBack=({name, text, clase,onClick}:Props)=> {

  return (
    <>
      <button className={`btnBack flexCenter ${clase}`} onClick={onClick}>
        <span className={`btnBack btnBack--${name} flexCenter`}>{renderIconSpan(name)}</span>
        {text}
      </button>
    </>
  )
}

