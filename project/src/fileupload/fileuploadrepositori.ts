import { Injectable } from "@nestjs/common";
import { rejects } from "assert";
import toStream from 'buffer-to-stream';
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

import { resolve } from "path";


@Injectable()
export class  FileuploadRepositpry{
     async uploadimage(file: Express.Multer.File): Promise<UploadApiResponse>{
        return new Promise((resolve, reject) =>{
            const upload = cloudinary.uploader.upload_stream(
                { resource_type : 'image'},
                (error , result)=>{
                    if(error){
                        reject(error);
                    }else{
                        resolve(result!);
                    }
                },
            );
            toStream(file.buffer).pipe(upload);
        });
        
    }
}