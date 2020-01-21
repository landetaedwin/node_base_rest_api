"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("../model/user");
class LoginRepository {
    login(username) {
        const userRepository = typeorm_1.getRepository(user_1.User);
        return userRepository.findOneOrFail({ where: { username } });
    }
}
exports.LoginRepository = LoginRepository;
//# sourceMappingURL=login.repository.js.map