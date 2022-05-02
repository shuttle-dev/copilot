module.exports = {
	root: true,
	env: {
		node: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
	],
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	plugins: [
		'@typescript-eslint',
		'import',
		'unused-imports',
		'simple-import-sort',
		'import-newlines',
	],
	rules: {
		'@typescript-eslint/indent': [
			'error',
			'tab',
		],
		'@typescript-eslint/no-loop-func': 'off',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/no-useless-constructor': 'off',
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: true,
				},
			},
		],
		'global-require': 'off',
		'max-classes-per-file': 'off',
		'consistent-return': 'off',
		'max-len': ['error', { code: 200 }],
		'no-param-reassign': 'off',
		'no-spaced-func': 'off',
		'no-restricted-exports': 'off',
		'no-await-in-loop': 'off',
		'default-case': 'off',
		'class-methods-use-this': 'off',
		'no-async-promise-executor': 'off',
		'prefer-destructuring': 'off',
		'no-plusplus': 'off',
		'no-tabs': 'off',
		'no-console': 'off',
		'no-nested-ternary': 'off',
		'spaced-comment': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					consistent: true,
					multiline: true,
				},
				ObjectPattern: {
					consistent: true,
					multiline: true,
				},

				ImportDeclaration: {
					consistent: true,
					multiline: true,
					minProperties: 3,
				},
				ExportDeclaration: {
					consistent: true,
					multiline: true,
					minProperties: 3,
				},
			},
		],
		'import-newlines/enforce': ['error',
			{
				items: 2,
				'max-len': 160,
				semi: true,
			},
		],
		'key-spacing': ['error', { mode: 'strict' }],
		'import/no-cycle': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'unused-imports/no-unused-imports': 'error',
		'simple-import-sort/imports': 'error',
	},
};
