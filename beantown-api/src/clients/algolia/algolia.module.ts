import { Module } from '@nestjs/common';
import { AlgoliaService } from './algolia.service';

@Module({
  providers: [AlgoliaService],
})
export class AlgoliaModule {}
