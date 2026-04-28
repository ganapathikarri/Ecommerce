import { apiClient, USE_MOCK_API } from "@/lib/apiClient";
import { CartItem } from "@/context/CartContext";

/**
 * Cart service — wire these to Spring Boot when ready.
 * Suggested endpoints:
 *   POST   /cart/checkout   { items: CartItem[] } -> { orderId: string }
 */
export const cartService = {
  async checkout(items: CartItem[]): Promise<{ orderId: string }> {
    if (USE_MOCK_API) {
      await new Promise((r) => setTimeout(r, 800));
      return { orderId: `MOCK-${Date.now()}` };
    }
    const { data } = await apiClient.post<{ orderId: string }>("/cart/checkout", { items });
    return data;
  },
};
