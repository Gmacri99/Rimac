import { BtnBack } from '../../../common/btnBack'
import { Card } from '../../../common/cardOption'
import { useDataContext } from '../../../context/context'
import { capitalizeFirst} from '../../../helpers/funciones'
import './styles.scss'
import Options from '../../../const/CardOptions.json';
import { PlanSection } from './Plans'
import { useRedirect } from '../../../hooks/useRedirect'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'


export const HeroPlan=()=> {
  
  const {data,option,setOption}=useDataContext()

  const { logout} = useRedirect();

  
  const CardsRef = useRef(null);
  const TitleRef = useRef(null);
  const BtnRef = useRef(null);

  useEffect(() => {

    gsap.set(CardsRef.current, { y: 60, opacity:0 });
    gsap.set(TitleRef.current, { opacity: 0, y: -60 });
    gsap.set(BtnRef.current, { opacity: 0, x: 30 });

    gsap.to(CardsRef.current, {
      y: 0,
      opacity: 1, 
      duration: 2,
      ease: "power4.out",
    });

    gsap.to(TitleRef.current, {
      opacity: 1,
      y: 0, 
      duration: 2,
      ease: "power4.out",
    });

    gsap.to(BtnRef.current, {
      opacity: 1,
      x: 0, 
      duration: 2,
      ease: "power4.out",
    });

  }, []);

  return (
    <section className='col-12 PlanSection'>
        <div className='boxContainer heroPlan'>
            <div ref={BtnRef} className='heroPlan__containerButton'> <BtnBack onClick={logout} name='BackSvgMorado' text='Volver'/> </div>
            <div ref={TitleRef} className='heroPlan__containerText flexCenter'>
              <h2>{data? capitalizeFirst(data.name): 'Hola'} ¿Para quién deseas cotizar?</h2>
              <h6>Selecciona la opción que se ajuste más a tus necesidades.</h6>
            </div>
            <div ref={CardsRef} className='heroPlan__containerCards flexCenter'>
              {Options.map((el,index)=><Card key={index} onClick={()=>setOption(el)} state={option?.id===el.id ? true : false} svg={el.type} text={el.texto} name={el.name}/>)}
            </div>
        </div>
      <PlanSection/>
    </section>
  )
}

