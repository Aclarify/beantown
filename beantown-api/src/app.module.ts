import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogController } from './blog/blog.controller';

@Module({
  imports: [],
  controllers: [AppController, BlogController],
  providers: [AppService],
})
export class AppModule {}
