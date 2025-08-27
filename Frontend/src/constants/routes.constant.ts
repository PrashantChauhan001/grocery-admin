import type { ReactElement } from "react";
import Login from "@/pages/auth/login";
import Home from "@/pages/auth/home";
import Register from "@/pages/auth/register";
import ForgotPassword from "@/pages/auth/forgot-password/ForgotPassword";
import ResetPassword from "@/pages/auth/forgot-password/ResetPassword";

interface RouteType {
  path: string;
  name: string;
  component: () => ReactElement;
}

export const APP_ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
};

class Route {
  path: string;
  name: string;
  component: () => ReactElement;
  constructor(path: string, name: string, component: () => ReactElement) {
    this.path = path;
    this.name = name;
    this.component = component;
  }
}

// auth routes for unauthenticated users
const AUTH_ROUTES: RouteType[] = [
  new Route(APP_ROUTES.ROOT, "Home", Home),
  new Route(APP_ROUTES.LOGIN, "Login", Login),
  new Route(APP_ROUTES.REGISTER, "Register", Register),
  new Route(APP_ROUTES.FORGOT_PASSWORD, "Forgot Password", ForgotPassword),
  new Route(APP_ROUTES.RESET_PASSWORD, "Reset Password", ResetPassword),
];
// open routes for all user accessible pages
// const OPEN_ROUTES: RouteType[] = [new Route(APP_ROUTES.ROOT, "Login", Login)];
// open routes for all user accessible pages
// const OPEN_ROUTES: RouteType[] = [new Route(APP_ROUTES.ROOT, "Login", Login)];

export { AUTH_ROUTES };
