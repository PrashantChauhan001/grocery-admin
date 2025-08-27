import { APP_ROUTES } from "@/constants/routes.constant";
import React from "react";
import { Link } from "react-router";

const ResetPassword = () => {
  return (
    <div>
      <Link to={APP_ROUTES.LOGIN}>Login</Link>
    </div>
  );
};

export default ResetPassword;
