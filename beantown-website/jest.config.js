module.exports = {
	preset: 'ts-jest',
	roots: ['<rootDir>'],
	testMatch: [
		'**/__tests__/**/*.spec.[jt]s?(x)',
		'**/?(*.)+(spec|test).[tj]s?(x)',
	],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.jest.ts'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'^@lib/(.*)$': '<rootDir>/lib/$1',
	},
};
