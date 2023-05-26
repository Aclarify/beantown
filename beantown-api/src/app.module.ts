import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './blog-post/blog-post.module';

@Module({
  imports: [ConfigModule.forRoot(), BlogPostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
