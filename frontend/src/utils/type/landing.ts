import { StaticImageData } from "next/image";

export interface ILink {
  url: string,
  name: string
}

export interface IHeroSliderItem {
  img: StaticImageData | string;
  description: string;
  link: ILink;
}