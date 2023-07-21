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
