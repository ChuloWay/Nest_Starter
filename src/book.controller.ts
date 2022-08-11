import { Controller, Get, Post, HttpCode} from "@nestjs/common";

@Controller('books')
export class BookController {
    @Post()
    @HttpCode(204)
    create(): string {
        return 'Should make a new Book entry'
    }

    @Get()
    // can pass in other platform types for res object.. i.e res:Request in Express into the findAll Fxn
    findAll(): string {
        return 'Should return books';
    }
};