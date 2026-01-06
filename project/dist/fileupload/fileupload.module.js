"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileuploadModule = void 0;
const common_1 = require("@nestjs/common");
const fileupload_service_1 = require("./fileupload.service");
const fileupload_controller_1 = require("./fileupload.controller");
const Cloudinary_1 = require("../config/Cloudinary");
const fileuploadrepositori_1 = require("./fileuploadrepositori");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../products/entities/product.entity");
let FileuploadModule = class FileuploadModule {
};
exports.FileuploadModule = FileuploadModule;
exports.FileuploadModule = FileuploadModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.Products])],
        controllers: [fileupload_controller_1.FileuploadController],
        providers: [fileupload_service_1.FileuploadService, Cloudinary_1.cloudinaryConfig, fileuploadrepositori_1.FileuploadRepositpry],
    })
], FileuploadModule);
//# sourceMappingURL=fileupload.module.js.map