import { apiClient, USE_MOCK_API } from "@/lib/apiClient";
import { products as mockProducts, Product } from "@/data/products";

/**
 * Product service — single place to swap mock data for your Spring Boot APIs.
 *
 * When VITE_USE_MOCK_API=false, these call:
 *   GET  {VITE_API_BASE_URL}/products
 *   GET  {VITE_API_BASE_URL}/products/:id
 *   GET  {VITE_API_BASE_URL}/products/featured
 *
 * Your Spring Boot @RestController should return JSON matching the `Product` type
 * from src/data/products.ts. Adjust paths/field names below if your API differs.
 */

const fakeDelay = <T,>(data: T, ms = 600): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export const productService = {
  async getAll(): Promise<Product[]> {
    if (USE_MOCK_API) return fakeDelay(mockProducts);
    const { data } = await apiClient.get<Product[]>("/products");
    return data;
  },

  async getById(id: string): Promise<Product | undefined> {
    if (USE_MOCK_API) return fakeDelay(mockProducts.find((p) => p.id === id));
    const { data } = await apiClient.get<Product>(`/products/${id}`);
    return data;
  },

  async getFeatured(): Promise<Product[]> {
    if (USE_MOCK_API) return fakeDelay(mockProducts.slice(0, 6));
    const { data } = await apiClient.get<Product[]>("/products/featured");
    return data;
  },
};
