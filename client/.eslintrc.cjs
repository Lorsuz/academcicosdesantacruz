module.exports = {
	root: true,
	env: { browser: true, es2020: true, "jest/globals": true },
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'react-refresh', "jest"],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', "eslint:recommended", "plugin:jest/recommended"],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	rules: {
		'prettier/prettier': ['warn', { semi: true }],

		'react/prop-types': 'warn',
		'react/react-in-jsx-scope': 'warn',
		'react-hooks/rules-of-hooks': 'warn',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'warn',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'no-prototype-builtins': 'warn',

		'no-duplicate-imports': ['warn', { includeExports: true }],
		eqeqeq: ['warn', 'always'],
		'func-name-matching': ['warn', 'always']
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
