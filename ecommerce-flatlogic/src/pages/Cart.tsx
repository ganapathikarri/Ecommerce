import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { items, remove, updateQty, total, clear } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">Your cart is empty.</p>
            <Link to="/shop"><Button>Continue Shopping</Button></Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 divide-y divide-border border-y border-border">
              {items.map((i) => (
                <div key={i.id} className="flex gap-4 py-6">
                  <img src={i.image} alt={i.name} className="w-24 h-24 object-contain bg-secondary/50" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">{i.category}</p>
                    <h3 className="font-medium">{i.name}</h3>
                    <p className="text-price font-semibold mt-1">${i.price}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <input
                      type="number" min={1} value={i.quantity}
                      onChange={(e) => updateQty(i.id, parseInt(e.target.value) || 1)}
                      className="w-16 border border-border px-2 py-1 text-sm"
                    />
                    <button onClick={() => remove(i.id)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <aside className="bg-secondary/40 p-6 h-fit">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between text-sm py-2">
                <span>Subtotal</span><span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b border-border">
                <span>Shipping</span><span>Free</span>
              </div>
              <div className="flex justify-between font-semibold py-3">
                <span>Total</span><span className="text-price">${total.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-4">Checkout</Button>
              <button onClick={clear} className="text-xs text-muted-foreground hover:text-foreground mt-3 w-full">
                Clear cart
              </button>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
