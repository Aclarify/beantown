import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain, LLMChainInput } from 'langchain/chains';
import { OpenAIBaseInput } from 'langchain/dist/types/openai-types';
import { SUMMARIZE_BLOG } from './openAi.commonPrompts';

const openAIApiKey = process.env.OPENAI_API_KEY || '';

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

// This function creates a new translator.
export function createTranslator(
	options: TranslatorOptions,
	_LLMChain = LLMChain,
	_OpenAI = OpenAI
): Translator {
	// Create the language model.
	const model = new _OpenAI({
		openAIApiKey,
		modelName: 'text-davinci-003',
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
		return parseResponse(result.text as string);
	};

	// Return the translation function.
	return translate;
}

export const parseResponse = (response: string): string =>
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

export const summarizeBlog = (blogPostContent: string) =>
	createTranslator({
		promptTemplate: SUMMARIZE_BLOG,
	});
