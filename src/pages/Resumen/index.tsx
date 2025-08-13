import { Pasos } from "../../common/pasos"
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { HeroResumen } from "./Hero";
import './styles.scss'

export const Resumen=()=> {


  useAuthRedirect();


  return (
    <>
      <Pasos pasoNumber={2}/>
      <HeroResumen/>
    </>
  )
}

