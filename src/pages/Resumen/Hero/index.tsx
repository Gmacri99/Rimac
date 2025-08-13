import { BtnBack } from "../../../common/btnBack";
import { CardResumen } from "../../../common/cardResumen";
import { useDataContext } from "../../../context/context";
import { useRedirect } from "../../../hooks/useRedirect";
import './styles.scss'

export const HeroResumen=()=> {

  const {data,option,setOption,selectedPlan}=useDataContext()

  const {redirectPlan} = useRedirect();

  return (
    <>
      <section className="col-12 HeroSection">
        <div className='boxContainer heroResumen'>
          <div className='heroPlan__containerButton'> <BtnBack onClick={redirectPlan} name='BackSvgMorado' text='Volver'/></div>
          <h2>Resumen del seguro</h2>
          { data && selectedPlan ? <CardResumen name={data?.name} lastName={data?.lastName} type={selectedPlan.type} typeDocument={data.TipoDocumento} DNI={data?.NroDocumento} celular={data?.celular} plan={selectedPlan?.name} precio={selectedPlan.price}/> : null}
        </div>
      </section>
    </>
  )
}

