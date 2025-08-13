import { BtnBack } from '../../../common/btnBack'
import { Card } from '../../../common/cardOption'
import { useDataContext } from '../../../context/context'
import { capitalizeFirst} from '../../../helpers/funciones'
import './styles.scss'
import Options from '../../../const/CardOptions.json';
import { PlanSection } from './Plans'
import { useNavigate } from 'react-router-dom'
import { useRedirect } from '../../../hooks/useRedirect'


export const HeroPlan=()=> {
  
  const {data,option,setOption}=useDataContext()

  const { logout} = useRedirect();

  return (
    <section className='col-12 PlanSection'>
        <div className='boxContainer heroPlan'>
            <div className='heroPlan__containerButton'> <BtnBack onClick={logout} name='BackSvgMorado' text='Volver'/> </div>
            <div className='heroPlan__containerText flexCenter'>
              <h2>{data? capitalizeFirst(data.name): 'Hola'} ¿Para quién deseas cotizar?</h2>
              <h6>Selecciona la opción que se ajuste más a tus necesidades.</h6>
            </div>
            <div className='heroPlan__containerCards flexCenter'>
              {Options.map((el,index)=><Card key={index} onClick={()=>setOption(el)} state={option?.id===el.id ? true : false} svg={el.type} text={el.texto} name={el.name}/>)}
            </div>
        </div>
      <PlanSection/>
    </section>
  )
}

