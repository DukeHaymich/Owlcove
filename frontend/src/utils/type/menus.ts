import { StaticImageData } from "next/image";

export interface IMenuCategory {
  name: string;
  url: string;
  img?: StaticImageData | string;
  children?: IMenuCategory[];
}

interface IPriceList {
  size: string;
  price: number;
}

export interface IFood {
  name: string;
  priceTag: IPriceList[] | number;
  category: string[];
}
