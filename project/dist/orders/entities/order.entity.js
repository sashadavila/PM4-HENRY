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
exports.Orders = void 0;
const openapi = require("@nestjs/swagger");
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
const ordersdetails_entity_1 = require("./ordersdetails.entity");
let Orders = class Orders {
    id;
    date;
    user;
    orderdetails;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, date: { required: true, type: () => Date }, user: { required: true, type: () => require("../../users/entities/users.entity").Users }, orderdetails: { required: true, type: () => require("./ordersdetails.entity").Orderdetails } };
    }
};
exports.Orders = Orders;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Orders.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Orders.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, (user) => user.order),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", users_entity_1.Users)
], Orders.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ordersdetails_entity_1.Orderdetails, (orderdetails) => orderdetails.order),
    __metadata("design:type", ordersdetails_entity_1.Orderdetails)
], Orders.prototype, "orderdetails", void 0);
exports.Orders = Orders = __decorate([
    (0, typeorm_1.Entity)({
        name: 'ORDERS',
    })
], Orders);
//# sourceMappingURL=order.entity.js.map