import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import user from './routes/user.router';
import login from './routes/login.router';
import { createConnection } from 'typeorm';


createConnection().then(connection => {
    console.log('Connected database')
}).catch(error => console.log(error));

class Server {
    app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        
    }

    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
       
    }

    routes() { 
        this.app.use('/api/user',user);
        this.app.use('/api/login',login);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        })
    }    
    
}

const server = new Server();
server.start();