import { StaticImageData } from "next/image";

export interface ILink {
  url: string,
  description: string
}

export interface IHeroSliderItem {
  img: StaticImageData | string;
  description: string;
  link: ILink;
}

export interface INumericSummaryItem {
  prefix?: string;
  suffix?: string;
  numericData: number;
  animated?: boolean;
  prefixNumericData?: string;
  suffixNumericData?: string;
}