
import { useEffect, useState } from 'react'
import { CardPlan } from '../../../../common/cardPlan'
import { useDataContext } from '../../../../context/context'
import './styles.scss'
import 'swiper/css'
import { Planes, type Plan } from './logica/getPlans'
import { calcularEdad, contieneClinica } from '../../../../helpers/funciones'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation} from 'swiper/modules'
import { BtnBack } from '../../../../common/btnBack'



export const PlanSection=()=> {
  
  const {data,option}=useDataContext()

  const [optionsPlan, setOptionsPlan] = useState<Plan[]>([])
  const [current, setCurrent] = useState<number>(1);

  useEffect(() => {
    const fetchPlans = async () => {
      const result = await Planes();

      if (data?.birthDay) {
        const edadUsuario = calcularEdad(data.birthDay);

        const planesFiltrados = result.filter(plan => plan.age >= edadUsuario);

        setOptionsPlan(planesFiltrados);
      } else {
        setOptionsPlan(result);
      }
    };

    fetchPlans();
  }, [data?.birthDay]);

  return (
    <>
    {option ?
      <section className='flexCenter col-12 sliderPlanes'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
          pagination={{ clickable: true }}
          loop={true}
          className="boxContainer"
          breakpoints={{
            0: {         
              slidesPerView: 1,
            },
            1040: {      
              slidesPerView: 3,
            },
          }}
        >
          {optionsPlan?.map((el, index) => (
            <SwiperSlide key={index}>
              <CardPlan
                title={el.name}
                price={el.price}
                items={el.description}
                type={contieneClinica(el.name)}
                typeOption={option.type}
              />
            </SwiperSlide>
          ))}
        </Swiper> 
        <div className="sliderPlanes__pagination flexCenter">
          <BtnBack clase='custom-prev' name='BackSvgRosa'/>
          <span>
            {current} / {optionsPlan?.length || 0}
          </span>
          <BtnBack clase='custom-next' name='BackSvgBlue'/>
        </div>
    </section>: null}
    </>
  )
}

