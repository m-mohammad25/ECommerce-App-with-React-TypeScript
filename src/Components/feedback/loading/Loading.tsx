import { TLoading } from "@types";
type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};
function Loading({ children, status, error }: TLoadingProps) {
  if (status === "pending") {
    return <p>loading please wait</p>;
  }
  if (status === "failed") {
    return <p>{error}</p>;
  }

  return <>{children}</>;
}

export default Loading;
