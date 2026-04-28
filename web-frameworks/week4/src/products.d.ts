export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  rating: number;
}

export function getAllProducts(): Product[];
export function getProductById(id: number): Product | undefined;