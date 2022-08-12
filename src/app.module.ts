import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/book.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [BookModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
