import { TLoading } from "@types";
import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductsSkeleton/ProductsSkeleton";
import CartSkeleton from "../skeletons/ProductsSkeleton/CartSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";
import TableSkeleton from "../skeletons/TableSkeleton/TableSkeleton";

const skeletonTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
  table: TableSkeleton,
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
    return <LottieHandler type="error" message={error as string} />;
  }

  return <>{children}</>;
}

export default Loading;
