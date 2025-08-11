import type { JSX } from 'react'
import './styles.scss'

type Props = {
  svg:JSX.Element | null
}

export const Logo=({svg}:Props)=> {

  return (
    <>
      <span className='svgContainer'>
        {svg}
      </span>
    </>
  )
}

