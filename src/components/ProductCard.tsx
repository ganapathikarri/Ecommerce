import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

const ProductCard = ({ product }: { product: Product }) => {
  const { add } = useCart();
  return (
    <article className="group">
      <div className="product-card-img relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={() => {
            add(product);
            toast({ title: "Added to cart", description: product.name });
          }}
          className="absolute inset-x-4 bottom-4 bg-primary text-primary-foreground text-xs font-semibold py-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ADD TO CART
        </button>
      </div>
      <div className="pt-3">
        <p className="text-xs text-muted-foreground">{product.category}</p>
        <h3 className="text-sm font-medium mt-1">{product.name}</h3>
        <p className="text-sm font-semibold text-price mt-1">${product.price}</p>
      </div>
    </article>
  );
};

export default ProductCard;
