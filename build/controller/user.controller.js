"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../repository/user.repository");
const user_1 = require("../model/user");
const userRepository = new user_repository_1.UserRepository;
class UserController {
}
UserController.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = new user_1.User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.username = req.body.username;
    user.password = req.body.password;
    user.isactive = req.body.isactive;
    user.hashPassword();
    yield userRepository.create(user).then((result) => res.send(result));
});
UserController.findUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userRepository.find().then((result) => res.send(result));
});
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map