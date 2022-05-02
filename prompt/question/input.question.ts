import { Question, Validator } from 'inquirer';

interface InputQuestionOptions {
	default?: string;
	validator?: Validator;
}

export class InputQuestion {
	private readonly name: string;

	private readonly message: string;

	private readonly options: InputQuestionOptions = {
		default: undefined,
	};

	private readonly validator: Validator;

	constructor(name: string, message: string, options?: InputQuestionOptions) {
		this.name = name;
		this.message = message;
		this.options = {
			...this.options,
			...(options?.default && { default: options.default }),
		};
		this.validator = options?.validator;
	}

	ask(): Question {
		return {
			type: 'input',
			name: this.name,
			message: this.message,
			default: this.options.default,
			...(this.validator && { validate: this.validator }),
		};
	}
}
