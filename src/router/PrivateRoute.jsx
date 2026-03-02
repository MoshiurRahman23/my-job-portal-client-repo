

import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../contexts/AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loadding } = useContext(AuthContext); // fixed typo & useContext
  const location = useLocation();
  // console.log(location)

  if (loadding) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      replace
      // state={{ from: location }}
      state={location.pathname}
    />
  );
};

export default PrivateRoute;