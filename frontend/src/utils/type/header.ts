export interface IMenuLink {
  name: string;
  url: string;
}

export interface IMenuGroup {
  name: string;
  url?: string;
  children: MenuItem[];
}

export type MenuItem = IMenuGroup | IMenuLink;