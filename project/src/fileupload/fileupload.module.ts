import { Module } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileuploadController } from './fileupload.controller';
import { cloudinaryConfig } from 'src/config/Cloudinary';
import { FileuploadRepositpry } from './fileuploadrepositori';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/products/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Products])],
  controllers: [FileuploadController],
  providers: [FileuploadService , cloudinaryConfig , FileuploadRepositpry ],
})
export class FileuploadModule {}
