export interface Product {
  _id: string;
  title: string;
  price: string;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  description: string;
  category?: string;
}

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
};

export type ProductOrder = Product & {
  quantity: number;
};

export type Order = {
  _id: string;
  userId: string;
  productList: ProductOrder[];
  createdAt: string;
};
