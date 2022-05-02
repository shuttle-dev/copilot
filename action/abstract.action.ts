export interface Input {
	name: string;
	value: unknown;
	options?: any;
}

export function getInputValue(inputs: Input[], name: string): string {
	return (inputs.find((input) => input.name === name))?.value as string;
}

export abstract class AbstractAction {
	public abstract handle(
		inputs?: Input[],
		options?: Input[],
		extraFlags?: string[],
	): Promise<void>;
}
