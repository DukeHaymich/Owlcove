export interface ICategoryImage {
  name: string;
  dataBase64: string;
  contentType: string;
}

export interface ICategory {
  name: string;
  image: ICategoryImage;
}

export interface IFood {
  name: string;
  price: number;
  tags: string[];
}

export interface IFoodCategory extends ICategory {
  foods: IFood[];
}
