module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['unused-imports'],
	rules: {
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
	},
}
