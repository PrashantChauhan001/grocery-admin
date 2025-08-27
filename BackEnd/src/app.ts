import createError from 'http-errors';
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import http from 'http';

dotenv.config({ path: path.join(__dirname, '../.env') });
import { handleError } from './helpers/error';
import httpLogger from './middlewares/httpLogger';
import appRouter from './routes';
import { isDBRunning } from './configs/initialization.db';
import { APP_ROUTE } from './constants/route.constants';

isDBRunning().then((res) => {
  if (res) {
    const app: express.Application = express();

    app.use(httpLogger);
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.use(APP_ROUTE.API, appRouter);

    app.use(APP_ROUTE.ROOT, (_req, res) => res.send('<h1>Server is Listning</h1>'));

    // catch 404 and forward to error handler
    app.use((_req, _res, next) => {
      next(createError(404));
    });

    // error handler
    app.use(handleError);

    const port = process.env.PORT || '8000';
    app.set('port', port);

    const server = http.createServer(app);

    function onError(error: { syscall: string; code: string }) {
      if (error.syscall !== 'listen') {
        throw error;
      }

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          process.exit(1);
          break;
        case 'EADDRINUSE':
          process.exit(1);
          break;
        default:
          throw error;
      }
    }

    function onListening() {
      console.info(`Server is listening on http://localhost:${port}`);
    }

    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
  } else {
    console.error('DB is not connected');
  }
});
