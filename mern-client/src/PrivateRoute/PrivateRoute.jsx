import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );

  if (user) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      state={{ from: location.pathname }}
      replace
    />
  );
};

export default PrivateRoute;
