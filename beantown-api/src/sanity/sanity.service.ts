import { SanityConfig } from '@beantown/config';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@sanity/client';

@Injectable()
export class SanityService {
  private readonly client: ReturnType<typeof createClient>;

  constructor(private configService: ConfigService) {
    const sanityConfig =
      this.configService.get<SanityConfig['clientConfig']>('clientConfig');
    this.client = createClient(sanityConfig);
  }

  getClient() {
    return this.client;
  }
}
