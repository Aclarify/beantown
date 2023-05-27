import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OpenAIApi, Configuration } from 'openai';
import { SUMMARIZE_BLOG } from './prompts/summarizeBlog.prompt';
import { OpenAIOptions } from '@beantown/config';
import { TOKEN } from './prompts/prompt.token';

@Injectable()
export class OpenAIService {
  private readonly openAIOptions: OpenAIOptions;
  private readonly configuration: Configuration;

  constructor(private configService: ConfigService) {
    const openAIApiKey = this.configService.get<string>(
      'openAIConfig.openAiApiKey',
    );
    this.configuration = new Configuration({
      apiKey: openAIApiKey,
    });
    this.openAIOptions = this.configService.get<OpenAIOptions>('openAIOptions');
  }

  async makeRequest(prompt: string, data: string, _OpenAIApi = OpenAIApi) {
    const openai = new _OpenAIApi(this.configuration);

    const preppedPrompt = prompt.replace(TOKEN, data);

    const response = await openai.createCompletion({
      model: this.openAIOptions.model,
      max_tokens: this.openAIOptions.maxTokens,
      prompt: preppedPrompt,
    });

    return this.parseResponse(response.data.choices[0].text);
  }

  parseResponse(response: string): string {
    return (
      response
        // Remove all multiple new lines
        .replace(/\n\n+/g, '\n')
        // Replace all single new lines with a space
        .replace(/\n/g, ' ')
        // Replace multiple spaces with single spaces
        .replace(/\s\s+/g, ' ')
        // Replace all tabs with single spaces
        .replace(/\t/g, ' ')
        // Remove leading and trailing spaces
        .trim()
    );
  }

  async summarizeBlog(blogPostContent: string, _OpenAIApi = OpenAIApi) {
    return this.makeRequest(SUMMARIZE_BLOG, blogPostContent, _OpenAIApi);
  }
}
