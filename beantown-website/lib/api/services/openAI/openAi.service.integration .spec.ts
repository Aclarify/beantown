import { LLMChain } from 'langchain';
import {
	TranslatorOptions,
	createTranslator,
	parseResponse,
} from './openAi.service';

const stubCall = jest.fn().mockResolvedValue({ text: '1' });

class StubLLMChain {
	call = stubCall;
}

describe('openAi.service', () => {
	describe('createTranslator', () => {
		const translatorOptions: TranslatorOptions = {
			promptTemplate: 'Write me a haiku about: {text}',
		};
		it('should return a translator', () => {
			const translator = createTranslator(translatorOptions);
			expect(translator).toBeDefined();
			expect(typeof translator).toBe('function');
		});

		it('should return a translator that calls a LLMChain chain', async () => {
			const translator = createTranslator(
				translatorOptions,
				StubLLMChain as unknown as typeof LLMChain
			);

			const result = await translator('flowers');

			expect(result).toBe('1');
		});
		it('should call OpenAI with prompt and receive a response', async () => {
			const translator = createTranslator(translatorOptions);

			const result = await translator('flowers');

			expect(result).toBeDefined();
			expect(typeof result).toBe('string');
		}, 10000);
	});
	describe('parseResponse', () => {
		it('should return a string', () => {
			const response = '\n\n\n\nThis  is\na	response';
			const result = parseResponse(response);
			expect(result).toBe('This is a response');
		});
	});
});
