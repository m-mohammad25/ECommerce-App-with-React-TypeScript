import { useAppSelector } from "@store/hooks";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { accessToken } = useAppSelector((state) => state.auth);
  if (!accessToken) {
    return (
      <Navigate to="/login?message=You need to login to view this content" />
    );
  }
  return <>{children}</>;
}

export default ProtectedRoute;
