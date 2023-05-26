import { Test, TestingModule } from '@nestjs/testing';
import { OpenAIService } from './openai.service';
import { OpenAIApi } from 'openai';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { openAIConfig } from '@beantown/config';

const stubCall = jest.fn().mockResolvedValue({
  data: {
    choices: [{ text: '1' }],
  },
});

class StubOpenAIApi {
  createCompletion = stubCall;
}

describe('OpenaiService', () => {
  let service: OpenAIService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ load: [openAIConfig] })],
      providers: [OpenAIService],
    }).compile();

    service = await module.resolve<OpenAIService>(OpenAIService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('summarizeBlog', () => {
    it('should call openai.createCompletion', async () => {
      const blogPostContent = 'blog post content';

      const result = await service.summarizeBlog(
        blogPostContent,
        StubOpenAIApi as unknown as typeof OpenAIApi,
      );

      expect(result).toBe('1');
      expect(stubCall).toHaveBeenCalledWith({
        model: 'text-davinci-003',
        prompt:
          'Summarize the following blog post into a 100 word summary: blog post content',
      });
    });
    it('should call openai.createCompletion', async () => {
      const blogPostContent = 'This is blog post content';

      const result = await service.summarizeBlog(blogPostContent);

      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    }, 10000);
  });

  describe('parseResponse', () => {
    it('should return a string', () => {
      const response = '\n\n\n\nThis  is\na	response';
      const result = service.parseResponse(response);
      expect(result).toBe('This is a response');
    });
  });
});
