import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './blog-post/blog-post.module';
import { AllExceptionsFilter } from '@beantown/core';
import { APP_FILTER } from '@nestjs/core';
import { SanityModule } from './clients/sanity/sanity.module';
import { algoliaConfig, openAIConfig, sanityConfig } from '@beantown/config';
import { AlgoliaModule } from './clients/algolia/algolia.module';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [sanityConfig, algoliaConfig, openAIConfig],
    }),
    BlogPostModule,
    SanityModule,
    AlgoliaModule,
    OpenaiModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
