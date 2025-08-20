import type {
  NavigateOptions as RRNavigateOptions,
  Location as RRLocation,
  To,
} from "react-router";

declare module "react-router" {
  interface NavigateState {
    from?: string;
    [key: string]: unknown;
  }

  interface LocationWithState extends Omit<RRLocation, "state"> {
    state?: NavigateState;
  }

  interface NavigateOptions extends Omit<RRNavigateOptions, "state"> {
    state?: NavigateState;
  }

  interface NavigateFunction {
    (to: To, options?: NavigateOptions): void | Promise<void>;
    (delta: number): void | Promise<void>;
  }

  function useLocation(): LocationWithState;
  function useNavigate(): NavigateFunction;
}
