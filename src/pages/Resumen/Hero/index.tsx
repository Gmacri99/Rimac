import gsap from "gsap";
import { BtnBack } from "../../../common/btnBack";
import { CardResumen } from "../../../common/cardResumen";
import { useDataContext } from "../../../context/context";
import { useRedirect } from "../../../hooks/useRedirect";
import './styles.scss'
import { useEffect, useRef } from "react";
import { useAuthRedirect } from "../../../hooks/useAuthRedirect";

export const HeroResumen=()=> {

  const {data,option,setOption,selectedPlan}=useDataContext()

  const {redirectPlan} = useRedirect();
  
  useAuthRedirect()

  const TitleRef = useRef(null);
  const BtnRef = useRef(null);

  useEffect(() => {

    gsap.set(TitleRef.current, { opacity: 0, y: -60 });
    gsap.set(BtnRef.current, { opacity: 0, x: 30 });



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
    <>
      <section className="col-12 HeroSection">
        <div className='boxContainer heroResumen'>
          <div ref={BtnRef} className='heroResumen__containerButton'> <BtnBack onClick={redirectPlan} name='BackSvgMorado' text='Volver'/></div>
          <h2 ref={TitleRef}>Resumen del seguro</h2>
          { data && selectedPlan ? <CardResumen name={data?.name} lastName={data?.lastName} type={selectedPlan.type} typeDocument={data.TipoDocumento} DNI={data?.NroDocumento} celular={data?.celular} plan={selectedPlan?.name} precio={selectedPlan.price}/> : null}
        </div>
      </section>
    </>
  )
}

