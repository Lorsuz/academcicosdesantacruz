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
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'align-assignments': ['off', { requiresOnly: false }],
		'arrow-body-style': ['warn', 'as-needed'],
		eqeqeq: ['warn', 'always'],
		'func-name-matching': ['warn', 'always'],
		indent: ['warn', 'tab'],
		'no-duplicate-imports': ['warn', { includeExports: true }],
		'no-multiple-empty-lines': ['warn', { max: 1 }],
		'default-case': 'error',
		'no-use-before-define': [
			'error',
			{
				functions: true,
				classes: true,
				variables: true,
				allowNamedExports: false
			}
		],
		'use-isnan': 'error',
		'valid-typeof': ['error', { requireStringLiterals: true }],
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-self-compare': 'error',
		'no-nested-ternary': 'error',
		'no-eval': 'error',
		'no-empty-function': 'error',
		'no-empty': 'error',
		'dot-notation': 'error',
		'no-else-return': 'error',
		'no-console': 'error',
		'no-alert': 'error',
		'multiline-comment-style': ['error', 'starred-block'],
		'max-statements': ['error', 10],
		'max-params': ['error', 3],
		'max-lines-per-function': ['error', { max: 3, skipComments: true }],
		'max-lines': ['error', { max: 2, skipBlankLines: true }],
		'max-depth': ['error', 2],
		'max-classes-per-file': ['error', 1],
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'func-names': ['error', 'always'],
		'func-name-matching': ['error', 'never'],
		'capitalized-comments': ['error', 'always'],
		'arrow-body-style': ['error', 'always'],
		'block-scoped-var': 'error',
		camelcase: 'error',
		'line-comment-position': ['error', { position: 'above' }],
		'vars-on-top': 'error',
		'func-name-matching': 'error',
		'sort-vars': 'error',
		'sort-keys': 'error',
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: false
			}
		],
		'require-await': 'error',
		'prefer-template': 'error',
		'operator-assignment': ['error', 'always'],
		'prefer-destructuring': 'error',
		'prefer-exponentiation-operator': 'error',
		'one-var': ['error', 'always'],
		'no-var': 'error',
		'no-useless-return': 'error',
		'no-warning-comments': ['error', { terms: ['todo', 'fixme', 'any other term'], location: 'anywhere' }],
		'no-magic-numbers': 'error',
		'no-label-var': 'error',
		'no-inline-comments': 'error',
		'no-implicit-coercion': 'error',
		'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: [], ignoreOnInitialization: false }],
		'prettier/prettier': ['warn', { semi: true }],
		'no-useless-concat': 'error',
		'no-useless-catch': 'error',
		'no-unused-expressions': 'error',
		'no-unneeded-ternary': 'error',
		'no-undefined': 'error',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'FunctionExpression',
				message: 'Function expressions are not allowed.'
			},
			{
				selector: "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
				message: 'setTimeout must always be invoked with two arguments.'
			}
		],
		'no-useless-rename': [
			'error',
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false
			}
		]
	},
	IgnorePatterns: ['dist', '.eslintrc.cjs']
};
