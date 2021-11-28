import * as express from 'express';
import carRouter from './cats/cats.route';

class Server {
  public app: express.Application;
  constructor() {
    const app :express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use('/cats', carRouter)
  }

  private setMiddleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    
    this.setRoute();
    
    this.app.use((req, res, next) => {
      console.log('middleware');
      res.send({ error: '404 NOT FOUND' });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(4000,() => {
      console.log('server is running');
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
