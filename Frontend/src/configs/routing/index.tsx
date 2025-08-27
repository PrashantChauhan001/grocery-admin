import { AUTH_ROUTES } from "@/constants/routes.constant";
import { Route, Routes } from "react-router";

const Routing = () => {
  // check if user has already logged in

  // is user logged in

  // is user not logged in
  return (
    <Routes>
      {AUTH_ROUTES.map((route) => (
        <Route path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default Routing;
