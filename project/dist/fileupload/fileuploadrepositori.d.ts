import { UploadApiResponse } from "cloudinary";
export declare class FileuploadRepositpry {
    uploadimage(file: Express.Multer.File): Promise<UploadApiResponse>;
}
