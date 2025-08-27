declare module 'express-async-wrapper' {
  export default asyncWrap;
}

declare function asyncWrap(fn: RequestHandler): RequestHandler;
