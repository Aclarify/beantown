import { AlgoliaConfig } from '@beantown/config/config.algolia';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import algoliasearch from 'algoliasearch';

@Injectable()
export class AlgoliaService {
  algoliaReadClient: ReturnType<typeof algoliasearch>;
  algoliaWriteClient: ReturnType<typeof algoliasearch>;

  constructor(private configService: ConfigService) {
    const config =
      this.configService.get<AlgoliaConfig['algoliaConfig']>('algoliaConfig');

    this.algoliaReadClient = algoliasearch(
      config.algoliaAppId,
      config.algoliaWriteApiKey,
    );

    this.algoliaWriteClient = algoliasearch(
      config.algoliaAppId,
      config.algoliaWriteApiKey,
    );
  }
}
