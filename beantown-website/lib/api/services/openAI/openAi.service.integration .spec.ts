import { LLMChain, OpenAI } from 'langchain';
import {
	TranslatorOptions,
	createTranslator,
	parseResponse,
} from './openAi.service';

const stubCall = jest.fn().mockResolvedValue({ text: '1' });

class StubLLMChain {
	call = stubCall;
}

class StubOpenAI {
	constructor() {
		return {};
	}
}

describe('openAi.service', () => {
	describe('createTranslator', () => {
		const translatorOptions: TranslatorOptions = {
			promptTemplate: 'Write me a haiku about: {text}',
		};
		it('should return a translator', () => {
			const translator = createTranslator(
				translatorOptions,
				StubLLMChain as unknown as typeof LLMChain,
				StubOpenAI as typeof OpenAI
			);
			expect(translator).toBeDefined();
			expect(typeof translator).toBe('function');
		});

		it('should return a translator that calls a LLMChain chain', async () => {
			const translator = createTranslator(
				translatorOptions,
				StubLLMChain as unknown as typeof LLMChain,
				StubOpenAI as typeof OpenAI
			);

			const result = await translator('flowers');

			expect(result).toBe('1');
		});
		/**
		 * The following integration test should be used sparingly
		 * as making requests to OpenAI is expensive.
		 */
		// it('should call OpenAI with prompt and receive a response', async () => {
		// 	const translator = createTranslator(translatorOptions);

		// 	const result = await translator('flowers');

		// 	expect(result).toBeDefined();
		// 	expect(typeof result).toBe('string');
		// }, 10000);
	});
	describe('parseResponse', () => {
		it('should return a string', () => {
			const response = '\n\n\n\nThis  is\na	response';
			const result = parseResponse(response);
			expect(result).toBe('This is a response');
		});
	});
});
