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

  describe('getClient', () => {
    it('should return a sanity client', () => {
      expect(service.getClient()).toBeDefined();
    });
    /* Integration Test */
    it('should fetch a blog collection', async () => {
      const results = await service
        .getClient()
        .fetch('*[_type == "blogPosts"]');

      expect(results).toBeDefined();
      expect(results.length).toBeGreaterThan(0);
    }, 10000);
  });
});
