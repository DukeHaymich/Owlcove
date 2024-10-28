export interface IMenuLink {
  name: string;
  url: string;
}

export interface IMenuGroup {
  name: string;
  url?: string;
  children: IMenuItem[];
}

export type IMenuItem = IMenuGroup | IMenuLink;