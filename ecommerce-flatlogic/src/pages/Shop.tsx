import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopSidebar from "@/components/ShopSidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popular");

  const filtered = useMemo(() => {
    let res = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false;
      if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (availability.length) {
        const wantIn = availability.includes("On Stock");
        const wantOut = availability.includes("Out of Stock");
        if (wantIn && !wantOut && !p.inStock) return false;
        if (wantOut && !wantIn && p.inStock) return false;
      }
      return true;
    });
    if (sortBy === "price-asc") res = [...res].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") res = [...res].sort((a, b) => b.price - a.price);
    if (sortBy === "name") res = [...res].sort((a, b) => a.name.localeCompare(b.name));
    return res;
  }, [selectedCategories, selectedBrands, priceRange, availability, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col md:flex-row gap-10">
          <ShopSidebar
            selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}
            selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands}
            priceRange={priceRange} setPriceRange={setPriceRange}
            availability={availability} setAvailability={setAvailability}
          />
          <section className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filtered.length} of {products.length} Products
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 h-9"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
