import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book.controller';
import { BooksService } from './book.service';

@Module({
  imports: [],
  controllers: [AppController, BookController],
  providers: [AppService, BooksService],
})
export class AppModule {}
