import { renderIconSpan } from '../../helpers/funciones'
import './styles.scss'

type Props = {
  name:string,
  text?:string
}

export const BtnBack=({name, text}:Props)=> {

  return (
    <>
      <button className={`btnBack flexCenter`}>
        <span className={`btnBack btnBack--${name} flexCenter`}>{renderIconSpan(name)}</span>
        {text}
      </button>
    </>
  )
}

