import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/productService";

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: productService.getAll,
    staleTime: 1000 * 60,
  });

export const useFeaturedProducts = () =>
  useQuery({
    queryKey: ["products", "featured"],
    queryFn: productService.getFeatured,
    staleTime: 1000 * 60,
  });
