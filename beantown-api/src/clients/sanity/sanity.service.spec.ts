import { Test, TestingModule } from '@nestjs/testing';
import { SanityService } from './sanity.service';
import { ConfigModule } from '@nestjs/config';
import { sanityConfig } from '@beantown/config';

describe('SanityService', () => {
  let service: SanityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ load: [sanityConfig] })],
      providers: [SanityService],
    }).compile();

    service = module.get<SanityService>(SanityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
