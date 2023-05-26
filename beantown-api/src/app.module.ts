import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './blog-post/blog-post.module';
import { AllExceptionsFilter } from '@beantown/core';
import { APP_FILTER } from '@nestjs/core';
import { SanityService } from './sanity/sanity.service';
import { SanityModule } from './sanity/sanity.module';
import { sanityConfig } from '@beantown/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [sanityConfig],
    }),
    BlogPostModule,
    SanityModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    SanityService,
  ],
})
export class AppModule {}
