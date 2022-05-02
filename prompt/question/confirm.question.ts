import { Question } from 'inquirer';

interface ConfirmQuestionOptions {
	default?: boolean;
}

export class ConfirmQuestion {
	private readonly name: string;

	private readonly message: string;

	private readonly options: ConfirmQuestionOptions = {
		default: false,
	};

	constructor(name: string, message: string, options?: ConfirmQuestionOptions) {
		this.name = name;
		this.message = message;
		this.options = {
			...this.options,
			...(options?.default && { default: options.default }),
		};
	}

	ask(): Question {
		return {
			type: 'confirm',
			name: this.name,
			message: this.message,
			default: this.options.default,
		};
	}
}
