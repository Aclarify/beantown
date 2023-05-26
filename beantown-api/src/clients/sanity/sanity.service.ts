import { SanityConfig } from '@beantown/config';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@sanity/client';
import { isValidSignature } from '@sanity/webhook';

@Injectable()
export class SanityService {
  private readonly client: ReturnType<typeof createClient>;
  private readonly sanityWebhookSecret: string;

  constructor(private configService: ConfigService) {
    const sanityConfig =
      this.configService.get<SanityConfig['clientConfig']>('clientConfig');

    this.sanityWebhookSecret = this.configService.get<
      SanityConfig['sanityWebhookSecret']
    >('sanityWebhookSecret');

    this.client = createClient(sanityConfig);
  }

  getClient() {
    return this.client;
  }

  isValidSanitySignature(body: any, signature: string) {
    return isValidSignature(body, signature, this.sanityWebhookSecret);
  }
}
