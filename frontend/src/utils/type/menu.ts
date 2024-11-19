import { StaticImageData } from "next/image";

export interface IMenuCategory {
  name: string;
  url: string;
  img?: StaticImageData | string;
  children?: IMenuCategory[];
}