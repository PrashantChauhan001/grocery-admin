import { APP_ROUTES } from "@/constants/routes.constant";
import { Link } from "react-router";

const ForgotPassword = () => {
  return (
    <div>
      <Link to={APP_ROUTES.LOGIN}>Login</Link>
      <Link to={APP_ROUTES.REGISTER}>Register</Link>
    </div>
  );
};

export default ForgotPassword;
