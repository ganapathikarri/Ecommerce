import { Link } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { count } = useCart();
  return (
    <header className="border-b border-border bg-background sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Flatlogic
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Pages</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/shop" className="nav-link">Blog</Link>
        </nav>
        <div className="flex items-center gap-5">
          <button aria-label="Search" className="text-foreground/80 hover:text-foreground">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="text-foreground/80 hover:text-foreground">
            <User className="h-5 w-5" />
          </button>
          <Link to="/cart" aria-label="Cart" className="relative text-foreground/80 hover:text-foreground">
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
