export interface IMenuContent {
  locations: IContactItem[];
  media: IMenuMedia[];
}

export interface IContactItem {
  address: string;
  phone: string;
}

export interface IMenuMedia {
  name: 'Facebook' | 'Zalo' | string;
  url: string;
}