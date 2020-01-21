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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_repository_1 = require("../repository/login.repository");
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const loginRepository = new login_repository_1.LoginRepository;
class LoginController {
}
LoginController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { username, password } = req.body;
    if (!(username && password)) {
        res.status(400).send();
    }
    let user;
    try {
        user = yield loginRepository.login(username).then((result) => result);
    }
    catch (error) {
        res.status(401).send();
    }
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
        res.status(401).send();
        return;
    }
    const token = jwt.sign({ userId: user.id, username: user.username }, config_1.default.jwtSecret, { expiresIn: "1m" });
    res.send(token);
});
exports.default = LoginController;
//# sourceMappingURL=login.controller.js.map