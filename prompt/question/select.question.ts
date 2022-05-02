import { ListQuestion, Validator } from 'inquirer';
import terminalSize from 'term-size';

interface SelectQuestionOptions {
	default?: string;
	pageSize?: 'auto' | number;
	validator?: Validator;
}

const DEFAULT_PAGE_SIZE: number = 5;

export class SelectQuestion {
	private readonly name: string;

	private readonly message: string;

	private readonly choices: any[];

	private readonly options: SelectQuestionOptions = {
		default: undefined,
		pageSize: 'auto',
	};

	private readonly validator: Validator;

	constructor(name: string, message: string, choices: any[], options?: SelectQuestionOptions) {
		this.name = name;
		this.message = message;
		this.choices = choices;
		this.options = {
			...this.options,
			...(options?.default && { default: options.default }),
			...(options?.pageSize && { pageSize: options.pageSize }),
		};
		this.validator = options?.validator;
	}

	ask(): ListQuestion {
		return {
			type: 'list',
			name: this.name,
			message: this.message,
			choices: this.choices,
			pageSize: this.getPageSize(),
			default: this.options.default,
			...(this.validator && { validate: this.validator }),
		};
	}

	private getPageSize(): number {
		if (this.options.pageSize === 'auto') {
			const { rows } = terminalSize();
			return rows || DEFAULT_PAGE_SIZE;
		}

		return this.options.pageSize || DEFAULT_PAGE_SIZE;
	}
}
