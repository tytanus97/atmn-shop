export interface Product {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  stock: number;
  rating: number;
  price: number;
  discountPercentage: number;
}
