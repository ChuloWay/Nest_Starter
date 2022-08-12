import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BooksService } from "./book.service";

@Module({
    controllers: [BookController],
    providers: [BooksService]
})
export class BookModule {}