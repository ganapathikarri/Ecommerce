import lamp from "@/assets/products/lamp.jpg";
import flower from "@/assets/products/flower.jpg";
import sofa from "@/assets/products/sofa.jpg";
import candle from "@/assets/products/candle.jpg";
import chair from "@/assets/products/chair.jpg";
import teapot from "@/assets/products/teapot.jpg";
import pillow from "@/assets/products/pillow.jpg";
import basket from "@/assets/products/basket.jpg";
import cushion from "@/assets/products/cushion.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
  inStock: boolean;
};

export const CATEGORIES = [
  "Furniture",
  "Lighting",
  "Decoration",
  "Bedding",
  "Bath & Shower",
  "Curtains",
  "Toys",
];

export const BRANDS = ["Poliform", "Roche Bobois", "Edra", "Kartell"];

export const products: Product[] = [
  { id: "1", name: "Awesome Lamp", category: "Lighting", brand: "Edra", price: 40, image: lamp, inStock: true },
  { id: "2", name: "Cool Flower", category: "Decoration", brand: "Kartell", price: 20, image: flower, inStock: true },
  { id: "3", name: "Cozy Sofa", category: "Furniture", brand: "Poliform", price: 150, image: sofa, inStock: true },
  { id: "4", name: "Awesome Candle", category: "Lighting", brand: "Edra", price: 15, image: candle, inStock: true },
  { id: "5", name: "Fancy Chair", category: "Furniture", brand: "Roche Bobois", price: 70, image: chair, inStock: true },
  { id: "6", name: "Chinese Teapot", category: "Decoration", brand: "Kartell", price: 50, image: teapot, inStock: false },
  { id: "7", name: "Soft Pillow", category: "Bedding", brand: "Poliform", price: 25, image: pillow, inStock: true },
  { id: "8", name: "Wicker Basket", category: "Decoration", brand: "Edra", price: 35, image: basket, inStock: true },
  { id: "9", name: "Floor Cushion", category: "Bedding", brand: "Roche Bobois", price: 45, image: cushion, inStock: true },
  { id: "10", name: "Modern Lamp", category: "Lighting", brand: "Kartell", price: 60, image: lamp, inStock: true },
  { id: "11", name: "Garden Pot", category: "Decoration", brand: "Edra", price: 18, image: flower, inStock: true },
  { id: "12", name: "Lounge Sofa", category: "Furniture", brand: "Poliform", price: 220, image: sofa, inStock: false },
  { id: "13", name: "Pillar Candle", category: "Lighting", brand: "Edra", price: 12, image: candle, inStock: true },
  { id: "14", name: "Accent Chair", category: "Furniture", brand: "Roche Bobois", price: 90, image: chair, inStock: true },
  { id: "15", name: "Brass Teapot", category: "Decoration", brand: "Kartell", price: 55, image: teapot, inStock: true },
];
