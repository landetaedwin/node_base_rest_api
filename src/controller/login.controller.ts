import { Request, Response } from 'express';
import { LoginRepository } from '../repository/login.repository';
import { User } from '../model/user';
import * as jwt from "jsonwebtoken";
import config from '../config/config';

const loginRepository = new LoginRepository;

class LoginController {

    static login = async (req: Request, res: Response) => {
        let { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).send();
        }
        let user: User;
        try {
            user = await loginRepository.login(username).then((result) => result);
        } catch (error) {
            res.status(401).send();
        }
        if (!user.checkIfUnencryptedPasswordIsValid(password)) {
            res.status(401).send();
            return;
        }
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            config.jwtSecret,
            { expiresIn: "1m" }
        );

        res.send(token);
    };

}

export default LoginController;