export enum OpenAIModel {
  'text-davinci-003' = 'text-davinci-003',
}

export type OpenAIOptions = {
  model: OpenAIModel;
};

export type OpenAIConfig = {
  openAIConfig: {
    openAiApiKey: string;
  };
  openAIOptions: OpenAIOptions;
};

export const openAIConfig: () => OpenAIConfig = () => ({
  openAIConfig: {
    openAiApiKey: process.env.OPENAI_API_KEY || '',
  },
  openAIOptions: {
    model:
      (process.env.OPENAI_MODEL as OpenAIModel) ||
      OpenAIModel['text-davinci-003'],
  },
});
