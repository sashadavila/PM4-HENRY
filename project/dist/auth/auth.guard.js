"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const roles_enum_1 = require("./roles.enum");
let AuthGuard = class AuthGuard {
    jtwService;
    constructor(jtwService) {
        this.jtwService = jtwService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authentication = request.headers['authorization'];
        if (!authentication)
            return false;
        const token = authentication.split(' ')[1];
        if (!token)
            return false;
        const secret = process.env.JWT_SECRET;
        try {
            const user = this.jtwService.verify(token, { secret });
            user.exp = new Date(user.exp * 10000);
            user.iat = new Date(user.iat * 10000);
            if (user.isAdmin) {
                user.roles = [roles_enum_1.Role.Admin];
            }
            else {
                user.roles = [roles_enum_1.Role.User];
            }
            request.user = user;
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
        return true;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map