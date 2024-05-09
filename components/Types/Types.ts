
export type DataButton = {
  name?: string;
  icon?: string;
  address: string;
  style?: string;
};

export type Products = {
  id: string;
  name: string;
  photo: string;
  photos: string[];
  color: string[];
  price: number;
  categorie: number;
  description: string;
  specifications: object[];
};