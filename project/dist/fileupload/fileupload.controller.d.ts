import { FileuploadService } from './fileupload.service';
export declare class FileuploadController {
    private readonly fileuploadService;
    constructor(fileuploadService: FileuploadService);
    uploadimage(file: Express.Multer.File, productId: string): Promise<import("../products/entities/product.entity").Products | null>;
}
