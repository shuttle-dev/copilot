import inquirer, { Question, Validator } from 'inquirer';
import { PathPrompt } from 'inquirer-path';

inquirer.prompt.registerPrompt('path', PathPrompt);

interface PathQuestion extends Question {
	multi?: boolean;
	directoryOnly?: boolean;
}

interface DirectoryQuestionOptions {
	default?: string;
	multi?: boolean;
	directoryOnly?: boolean;
	validator?: Validator;
}

export class DirectoryQuestion {
	private readonly name: string;

	private readonly message: string;

	private readonly options: DirectoryQuestionOptions = {
		default: process.cwd(),
		multi: false,
		directoryOnly: true,
	};

	private readonly validator: Validator;

	constructor(name: string, message: string, options?: DirectoryQuestionOptions) {
		this.name = name;
		this.message = message;
		this.options = {
			...this.options,
			...(options?.default && { default: options.default }),
			...(options?.multi && { multi: options.multi }),
			...(options?.directoryOnly && { directoryOnly: options.directoryOnly }),
		};
		this.validator = options?.validator;
	}

	ask(): PathQuestion {
		return {
			type: 'path',
			name: this.name,
			message: this.message,
			default: this.options.default,
			multi: this.options.multi,
			directoryOnly: this.options.directoryOnly,
			...(this.validator && { validate: this.validator }),
		};
	}
}
