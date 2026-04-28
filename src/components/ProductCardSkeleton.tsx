import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => (
  <div className="animate-fade-in">
    <Skeleton className="aspect-square w-full" />
    <Skeleton className="h-3 w-1/3 mt-3" />
    <Skeleton className="h-4 w-2/3 mt-2" />
    <Skeleton className="h-4 w-1/4 mt-2" />
  </div>
);

export default ProductCardSkeleton;
