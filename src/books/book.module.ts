import { Global, Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BooksService } from "./book.service";


@Global()
@Module({
    controllers: [BookController],
    providers: [BooksService],
    // we can share properties in a particular module with any another by putting the prop we wish to export in the export field;
    exports: [BooksService]
    // also note that modules can be re-exported.. i.e an imported module can be also exported;
    // if you wish to make a module global uou can also wrap it up with the @Global decorator
    // in doing this modules that need this definded 'BookModule do not need to add the module in the 'import' array field, not a good design patter, best to make use of exports arrray fields.
})
export class BookModule {}