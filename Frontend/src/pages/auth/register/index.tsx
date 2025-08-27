import { APP_ROUTES } from "@/constants/routes.constant";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <Link to={APP_ROUTES.ROOT}>Home</Link>
    </div>
  );
};

export default Register;
