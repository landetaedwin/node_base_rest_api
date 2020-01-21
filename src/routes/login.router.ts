import { Router } from 'express'
import LoginController from '../controller/login.controller';

class Login {
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.post('/', LoginController.login);
    }
}

const login = new Login();
login.routes();

export default login.router;