import type { JSX } from "react";
import { SvgItems, type ElementSvg } from "../assets/svg/ListaSvg";

export const renderIconSpan = (targetName: string, items: ElementSvg[] = SvgItems): JSX.Element | null => {

  const foundItem = items.find((el) => el.name === targetName);
  
  if (!foundItem) return null;

  return <>{foundItem.svg}</>;
}

export const capitalizeFirst = (palabra: string): string => {
  if (!palabra) return '';
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
};

export const toLowerCaseAll = (palabra: string): string => {
  if (!palabra) return '';
  return palabra.toLowerCase();
};
