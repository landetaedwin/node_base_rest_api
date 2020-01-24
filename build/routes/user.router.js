"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const checkjwt_1 = require("../middlewares/checkjwt");
class User {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/', user_controller_1.default.createUser);
        this.router.get('/', [checkjwt_1.checkJwt], user_controller_1.default.findUsers);
    }
}
const user = new User();
user.routes();
exports.default = user.router;
//# sourceMappingURL=user.router.js.map