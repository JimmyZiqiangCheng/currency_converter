import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/authProvider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
