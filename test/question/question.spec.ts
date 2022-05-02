import { InputQuestion } from '../../prompt/question/input.question';
import { SelectQuestion } from '../../prompt/question/select.question';

describe('question', () => {
	describe('inputQuestion', () => {
		it('should return an input question', () => {
			const question = new InputQuestion('name', 'name', { default: 'name' });
			expect(question.ask()).toEqual({
				type: 'input',
				name: 'name',
				message: 'name',
				default: 'name',
			});
		});
	});
	describe('selectQuestion', () => {
		it('should return a select question', () => {
			const question = new SelectQuestion('name', 'name', ['a', 'b'], { default: 'b', pageSize: 10 });
			expect(question.ask()).toEqual({
				type: 'list',
				name: 'name',
				message: 'name',
				choices: ['a', 'b'],
				default: 'b',
				pageSize: 10,
			});
		});
	});
});
