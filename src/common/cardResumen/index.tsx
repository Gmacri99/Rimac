import './styles.scss'
import { aplicarDescuento, capitalizeFirst, renderIconSpan, toLowerCaseAll } from '../../helpers/funciones';
import { Line } from '../linea';

type Props = {
name:string,
lastName:string,
DNI:string,
celular:string,
type:string,
typeDocument:string,
plan:string,
precio:number
}

export const CardResumen=({name,lastName,DNI,type,typeDocument,celular,plan,precio}:Props)=> {

  return (
  <div className='Card CardResumen flexCenter'>
    <div className='CardResumen__containerInfo flexCenter'>
      <div className='CardResumen__containerHeader'>
        <p className='CardResumen__containerHeader__titleParagraph'>Precios calculados para:</p>
        <div className='CardResumen__containerHeader__nameContainer'><span>{renderIconSpan('people')}</span> <p>{toLowerCaseAll(type)==='regalo' ? `Para conocido de ${capitalizeFirst(name)} ${capitalizeFirst(lastName)}` : `${capitalizeFirst(name)} ${capitalizeFirst(lastName)}`}</p></div>
      </div>
      <Line color='gris'/>
      <div className='CardResumen__containerResponsable'>
        <p className='CardResumen__containerResponsable__title'>Responsable de pago</p>
        <div className='CardResumen__containerResponsable__data'>
          <p>{typeDocument}: {DNI}</p>
          <p>Celular: {celular}</p>
        </div>
      </div>
      <div className='CardResumen__containerResponsable'>
        <p className='CardResumen__containerResponsable__title'>Plan elegido</p>
        <div className='CardResumen__containerResponsable__data'>
          <p>{plan}</p>
          <p>Costo del Plan:  {toLowerCaseAll(type)==='regalo' ? <><span className='discount'>${precio}</span> ${aplicarDescuento(precio)}</>: <> ${precio}</>}   al mes!</p>
        </div>
      </div>
    </div>
  </div>
  )
}

