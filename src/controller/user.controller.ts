import { Request, Response } from 'express';
import { UserRepository } from '../repository/user.repository'
import { User } from '../model/user';

const userRepository = new UserRepository;

class UserController {

    static createUser = async (req: Request, res: Response) => {
        let user = new User()

        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.username = req.body.username;
        user.password = req.body.password;
        user.isactive = req.body.isactive;
        
        user.hashPassword();
        await userRepository.create(user).then((result) => res.send(result));
    }

    static findUsers = async (req: Request, res: Response) => {
        await userRepository.find().then((result) => res.send(result));
    }

}

export default UserController;

