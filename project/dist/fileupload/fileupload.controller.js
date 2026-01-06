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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileuploadController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const fileupload_service_1 = require("./fileupload.service");
const platform_express_1 = require("@nestjs/platform-express");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
let FileuploadController = class FileuploadController {
    fileuploadService;
    constructor(fileuploadService) {
        this.fileuploadService = fileuploadService;
    }
    uploadimage(file, productId) {
        return this.fileuploadService.uploadimage(file, productId);
    }
};
exports.FileuploadController = FileuploadController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)('/uploadimage/:productId'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({
                maxSize: 2000 * 1024,
                message: 'file is to large',
            }),
            new common_1.FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/, }),
        ],
    }))),
    __param(1, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], FileuploadController.prototype, "uploadimage", null);
exports.FileuploadController = FileuploadController = __decorate([
    (0, common_1.Controller)('fileupload'),
    __metadata("design:paramtypes", [fileupload_service_1.FileuploadService])
], FileuploadController);
//# sourceMappingURL=fileupload.controller.js.map