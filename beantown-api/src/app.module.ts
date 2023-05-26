import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './blog-post/blog-post.module';
import { AllExceptionsFilter } from '@beantown/core';
import { APP_FILTER } from '@nestjs/core';
import { SanityService } from './clients/sanity/sanity.service';
import { SanityModule } from './clients/sanity/sanity.module';
import { algoliaConfig, sanityConfig } from '@beantown/config';
import { AlgoliaModule } from './clients/algolia/algolia.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [sanityConfig, algoliaConfig],
    }),
    BlogPostModule,
    SanityModule,
    AlgoliaModule,
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
