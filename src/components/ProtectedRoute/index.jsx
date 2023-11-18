import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  redirectPath = "/",
  children,
  isAuthorized,
}) {
  if (!isAuthorized) {
    return <Navigate to={redirectPath} />;
  }
  return children;
}
