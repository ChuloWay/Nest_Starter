import { Controller, Get, Post, HttpCode, Body, Res} from "@nestjs/common";
import { CreateBookDto } from "../dto/create-book.dto";
import { BooksService } from "./book.service";
import { Book } from "../interfaces/book.inteface";



@Controller('books')
export class BookController {
    constructor(private booksService: BooksService) {}


    @Post()
    @HttpCode(204)
   async create(@Body() createBookDto: CreateBookDto): Promise<string> {
        console.log('data')
        return 'Should make a new Book entry'
    }

    @Get()
    // can pass in other platform types for res object.. i.e res:Request in Express into the findAll Fxn
    async findAll(): Promise<any> {
        return `<h1>Should Return Books</h1>`;
    }
};

