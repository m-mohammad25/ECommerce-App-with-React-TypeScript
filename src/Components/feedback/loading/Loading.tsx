import { TLoading } from "@types";
import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductsSkeleton/ProductsSkeleton";
import CartSkeleton from "../skeletons/ProductsSkeleton/CartSkeleton";

const skeletonTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};

type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type: keyof typeof skeletonTypes;
};
function Loading({ children, status, error, type }: TLoadingProps) {
  if (status === "pending") {
    const Skeleton = skeletonTypes[type];
    return <Skeleton />;
  }
  if (status === "failed") {
    return <p>{error}</p>;
  }

  return <>{children}</>;
}

export default Loading;
