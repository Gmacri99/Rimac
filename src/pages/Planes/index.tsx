import { Pasos } from "../../common/pasos";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { HeroPlan } from "./Hero";
import './styles.scss'

export const Planes=()=> {

  useAuthRedirect();

  return (
    <main>
      <Pasos pasoNumber={1}/>
      <HeroPlan/>
    </main>
  )
}

