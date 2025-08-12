import type { JSX } from 'react'
import './styles.scss'

type Props = {
  svg:JSX.Element | null,
  component:string;
}

export const Logo=({svg , component}:Props)=> {

  return (
    <>
      <span className={`svgContainer--${component}`}>
        {svg}
      </span>
    </>
  )
}

