export interface Product {
  _id: string;
  title: string;
  price: string;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  description: string;
}

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  dob: string;
  phone: string;
  country: string;
  state: string;
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
