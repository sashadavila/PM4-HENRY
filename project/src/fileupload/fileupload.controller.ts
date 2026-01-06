import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, ParseUUIDPipe, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('fileupload')
export class FileuploadController {
  constructor(private readonly fileuploadService: FileuploadService) {}
  @ApiBearerAuth()
  @Put('/uploadimage/:productId')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  uploadimage(@UploadedFile( new ParseFilePipe({
    validators:[
      new MaxFileSizeValidator({
        maxSize :2000 * 1024,
        message :'file is to large',
      }),
      new FileTypeValidator({fileType: /(jpg|jpeg|png|webp)$/,}),
    ],
  }),
) file: Express.Multer.File ,
  @Param('productId', ParseUUIDPipe) productId: string,
  ) {
    return this.fileuploadService.uploadimage(file , productId);

  }
}
