import { Router } from 'express'
import UserController from '../controller/user.controller';
import { checkJwt } from '../middlewares/checkjwt';

class User {
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.post('/', UserController.createUser);
        this.router.get('/',[checkJwt], UserController.findUsers);
    }
}

const user = new User();
user.routes();

export default user.router;