import { getManager } from 'typeorm'
import { User } from '../model/user'

export class UserRepository {

    create(user: User) {
        return getManager().getRepository(User).save(user)
    }

    find() {
        return getManager().getRepository(User).find({ relations: ["details"] })
    }       
}   