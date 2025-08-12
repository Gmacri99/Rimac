import { BtnBack } from '../../../common/btnBack'
import { Card } from '../../../common/card'
import { useDataContext } from '../../../context/context'
import { capitalizeFirst } from '../../../helpers/funciones'
import './styles.scss'

export const HeroPlan=()=> {

  const {data}=useDataContext()

  return (
    <section className='flexCenter col-12'>
        <div className='boxContainer heroPlan'>
            <div className='heroPlan__containerButton'> <BtnBack name='BackSvgMorado' text='Volver'/> </div>
            <div className='heroPlan__containerText flexCenter'>
              <h2>{data? capitalizeFirst(data.name): 'Hola'} ¿Para quién deseas cotizar?</h2>
              <h6>Selecciona la opción que se ajuste más a tus necesidades.</h6>
            </div>
        </div>

    </section>
  )
}

