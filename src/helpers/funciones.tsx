import type { JSX } from "react";
import { SvgItems, type ElementSvg } from "../assets/svg/ListaSvg";

export const renderIconSpan = (targetName: string, items: ElementSvg[] = SvgItems): JSX.Element | null => {

  const foundItem = items.find((el) => el.name === targetName);
  
  if (!foundItem) return null;

  return <>{foundItem.svg}</>;
}

