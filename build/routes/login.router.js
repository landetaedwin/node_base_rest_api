"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = __importDefault(require("../controller/login.controller"));
class Login {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/', login_controller_1.default.login);
    }
}
const login = new Login();
login.routes();
exports.default = login.router;
//# sourceMappingURL=login.router.js.map