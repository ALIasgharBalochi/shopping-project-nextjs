
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

export type OpenDrawer = {
  openDrawer: boolean;
  closeDrawer: () => void;
};

export type DrawerData = {
  name: string;
  address: string;
};

export type AccordianData = {
  icon: string;
  name: string;
  address: string;
};

export type CategoreiType = {
  id: number;
  name: string;
  photo: string;
};