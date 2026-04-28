import { CATEGORIES, BRANDS } from "@/data/products";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

type Props = {
  selectedCategories: string[];
  setSelectedCategories: (v: string[]) => void;
  selectedBrands: string[];
  setSelectedBrands: (v: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (v: [number, number]) => void;
  availability: string[];
  setAvailability: (v: string[]) => void;
};

const toggle = (arr: string[], v: string) =>
  arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-b border-border py-5">
    <h4 className="text-xs font-semibold tracking-widest mb-4">{title}</h4>
    {children}
  </div>
);

const Row = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) => (
  <label className="flex items-center gap-2 py-1 cursor-pointer text-sm text-foreground/80 hover:text-foreground">
    <Checkbox checked={checked} onCheckedChange={onChange} />
    <span>{label}</span>
  </label>
);

const ShopSidebar = ({
  selectedCategories, setSelectedCategories,
  selectedBrands, setSelectedBrands,
  priceRange, setPriceRange,
  availability, setAvailability,
}: Props) => {
  return (
    <aside className="w-full md:w-56 shrink-0">
      <Section title="CATEGORIES">
        {CATEGORIES.map((c) => (
          <Row key={c} label={c} checked={selectedCategories.includes(c)}
               onChange={() => setSelectedCategories(toggle(selectedCategories, c))} />
        ))}
      </Section>
      <Section title="PRICE">
        <p className="text-xs text-muted-foreground mb-3">
          Price Range: ${priceRange[0]} — ${priceRange[1]}
        </p>
        <Slider
          min={0} max={500} step={10}
          value={priceRange}
          onValueChange={(v) => setPriceRange([v[0], v[1]] as [number, number])}
        />
      </Section>
      <Section title="BRANDS">
        {BRANDS.map((b) => (
          <Row key={b} label={b} checked={selectedBrands.includes(b)}
               onChange={() => setSelectedBrands(toggle(selectedBrands, b))} />
        ))}
      </Section>
      <Section title="AVAILABILITY">
        {["On Stock", "Out of Stock"].map((a) => (
          <Row key={a} label={a} checked={availability.includes(a)}
               onChange={() => setAvailability(toggle(availability, a))} />
        ))}
      </Section>
    </aside>
  );
};

export default ShopSidebar;
