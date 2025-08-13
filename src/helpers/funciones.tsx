import type { JSX } from "react";
import { SvgItems, type ElementSvg } from "../assets/svg/ListaSvg";

export const capitalizeFirst = (palabra: string): string => {
  if (!palabra) return '';
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
};

export const toLowerCaseAll = (palabra: string): string => {
  if (typeof palabra !== 'string') return '';
  return palabra.toLowerCase();
};

export const renderIconSpan = (targetName: string, items: ElementSvg[] = SvgItems): JSX.Element | null => {

  const foundItem = items.find((el) => toLowerCaseAll(el.name) === toLowerCaseAll(targetName));
  
  if (!foundItem) return null;

  return <>{foundItem.svg}</>;
}

export const aplicarDescuento=(precio: number): number => {
  const descuento = precio * 0.05;
  return precio - descuento;
}



export const contieneClinica = (texto: string): boolean => {
  return /clínica/i.test(texto);
};

export const calcularEdad=(fechaNacimiento: string | Date): number =>{
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
}


