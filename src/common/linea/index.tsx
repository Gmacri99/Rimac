
import './styles.scss'

type Line = {
  color:string
}

export const Line=({color}:Line)=> {

  return (
    <div className='col-12 Line'>
      <div className='boxContainer'>
        <span className={`boxContainer--${color}`}></span>
      </div>
    </div>
  )
}

