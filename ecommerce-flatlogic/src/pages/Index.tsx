import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import sofa from "@/assets/products/sofa.jpg";

const Index = () => {
  const featured = products.slice(0, 6);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/40">
          <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm tracking-widest text-muted-foreground mb-4">NEW COLLECTION</p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                Minimal furniture for modern living
              </h1>
              <p className="text-muted-foreground mb-8 max-w-md">
                Discover handpicked pieces that bring warmth, function and timeless design into your home.
              </p>
              <Link to="/shop"><Button size="lg">Shop Now</Button></Link>
            </div>
            <div className="bg-background p-8">
              <img src={sofa} alt="Featured sofa" width={800} height={800} className="w-full h-auto object-contain" />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground">View all →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
