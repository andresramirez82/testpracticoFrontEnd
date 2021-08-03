// Coterory types
export interface CategoryInterface {
  id: string;
  name: string;
}

export interface Categoryprops {
  category: CategoryInterface[];
}

// Serach types
export type SerachBarProps = {
  text?: string;
};

// Prod types
export interface ProductInterface {
  title: string;
  category: CategoryInterface[];
  price: number;
  thumbnail: string;
  condition: string;
  sold_quantity: number,
  detail: string
}
