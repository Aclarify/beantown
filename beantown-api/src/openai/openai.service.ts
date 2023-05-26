import { OpenAIConfig, OpenAIOptions } from '@beantown/config';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LLMChain, OpenAI, PromptTemplate } from 'langchain';
import { LLMChainInput } from 'langchain/chains';
import { OpenAIBaseInput } from 'langchain/dist/types/openai-types';
import { SUMMARIZE_BLOG } from './prompts/summarizeBlog.prompt';

// Define the options for the translation function.
export type TranslatorOptions = {
  promptTemplate: string;
  modelOptions?: Partial<OpenAIBaseInput>;
  chainOptions?: Partial<LLMChainInput<string>>;
};

type PromptTemplateOptions = {
  template: string;
  inputVariables: string[];
};

// Define the type of the translation function.
type Translator = (text: string) => Promise<string>;

@Injectable()
export class OpenAIService {
  private readonly openAIApiKey: string;
  private readonly openAIOptions: OpenAIOptions;

  constructor(private configService: ConfigService) {
    this.openAIApiKey =
      this.configService.get<OpenAIConfig['openAIConfig']>(
        'openAIConfig',
      ).openAiApiKey;
    console.log('OpenAI Key', this.openAIApiKey);

    this.openAIOptions =
      this.configService.get<OpenAIConfig['openAIOptions']>('openAIOptions');
  }

  createTranslator(
    options: TranslatorOptions,
    _LLMChain = LLMChain,
    _OpenAI = OpenAI,
  ): Translator {
    console.log(this.openAIOptions);
    // Create the language model.
    const model = new _OpenAI({
      openAIApiKey: this.openAIApiKey,
      modelName: this.openAIOptions.model,
      ...options.modelOptions,
    });

    // Create the prompt template.
    const promptOptions: PromptTemplateOptions = {
      template: options.promptTemplate,
      inputVariables: ['text'],
    };

    const prompt = new PromptTemplate(promptOptions);

    // Create the chain.
    const chainOptions: LLMChainInput<string> = {
      llm: model,
      prompt: prompt,
      ...options.chainOptions,
    };

    const chain = new _LLMChain(chainOptions);

    // This is the translation function.
    const translate: Translator = async (text: string) => {
      // Use the chain to generate a response.
      const result = await chain.call({ text });

      if (!result) {
        throw new Error('No result was returned from OpenAI');
      }

      if (!result.text) {
        throw new Error('No text was returned from OpenAI');
      }

      // The result is assumed to be a string.
      return this.parseResponse(result.text as string);
    };

    // Return the translation function.
    return translate;
  }

  parseResponse = (response: string): string =>
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
      .trim();

  summarizeBlog = async (blogPostContent: string) =>
    this.createTranslator({
      promptTemplate: SUMMARIZE_BLOG,
    })(blogPostContent);
}
