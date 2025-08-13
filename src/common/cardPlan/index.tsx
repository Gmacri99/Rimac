import './styles.scss'
import { aplicarDescuento, renderIconSpan, toLowerCaseAll } from '../../helpers/funciones';
import { Line } from '../linea';
import { useDataContext, type PlanSelected } from '../../context/context';
import { useNavigate } from 'react-router-dom';

type Props = {
title:string,
price:number,
typeOption:string,
type:boolean,
items:string[]
}

export const CardPlan=({title,price,typeOption,type,items}:Props)=> {

  const {setSelectedPlan}=useDataContext()
  const navigate= useNavigate()

  const handleClick = () =>{
    const plan:PlanSelected = {
      name:title,
      price:price,
      type:typeOption,
    }
    setSelectedPlan(plan)
    navigate('/resumen')
  }

  return (
  <div className='Card CardPlan flexCenter'>
    <div className='CardPlan__containerInfo'>
      <div className='CardPlan__containerHeader'>
        {type ? <span className='CardPlan__containerRecommended'>Plan recomendado</span> : null}
        <div className='CardPlan__containerHeader__containerTitle'>
        <div className='CardPlan__containerHeader__containerText'>
          <h3>{title}</h3>
          <div className='CardPlan__containerHeader__containerPrice'>
            <h6>Costo del plan</h6>
            {toLowerCaseAll(typeOption)==='regalo' ? <p className='CardPlan__containerHeader__priceDiscount'>${price} antes</p> : null}
            <p className='CardPlan__containerHeader__price'>${toLowerCaseAll(typeOption)!=='regalo' ? price : aplicarDescuento(price)} al mes</p>
          </div>
        </div>
        <div>
        <span>{renderIconSpan(type ? 'Clínica' : 'Casa')}</span>
        </div>
        </div>
      </div>
      <Line color='gris'/>
      <ul className='CardPlan__containerItems'>
        {items.map((el,index)=> <li key={index}>{el}</li>)}
      </ul>
    </div>
    <div className='CardPlan--containerButton '>
      <button onClick={handleClick}>Seleccionar Plan</button>
    </div>
  </div>
  )
}

