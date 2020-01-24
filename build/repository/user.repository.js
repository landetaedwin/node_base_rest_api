"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("../model/user");
class UserRepository {
    create(user) {
        return typeorm_1.getManager().getRepository(user_1.User).save(user);
    }
    find() {
        return typeorm_1.getManager().getRepository(user_1.User).find({ relations: ["details"] });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map