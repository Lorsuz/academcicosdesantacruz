module.exports = {
	root: true,
	env: {
		node: true
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': ['warn', { semi: true }],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',

		'arrow-body-style': ['warn', 'as-needed'],
		'no-duplicate-imports': ['warn', { includeExports: true }],
		eqeqeq: ['warn', 'always'],
		'func-name-matching': ['warn', 'always']
	},
	ignorePatterns: ['dist', '.eslintrc.cjs']
};
