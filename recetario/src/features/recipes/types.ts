import type { StaticImageData } from "next/image";

export interface Recipe {
  id: string;
  title: string;
  descriptionIngredientes: string;
  descriptionPreparacion: string;
  ilustracion?: string | StaticImageData;
}