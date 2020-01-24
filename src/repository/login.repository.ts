import { getManager, getRepository } from 'typeorm'
import { User } from '../model/user'

export class LoginRepository {
    login(username) {
        const userRepository = getRepository(User);
        return userRepository.findOneOrFail({ where: { username } });
         
    }       
} 