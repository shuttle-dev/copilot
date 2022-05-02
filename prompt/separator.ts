import inquirer from 'inquirer';

const DEFAULT_SEPARATOR_LENGTH = 10;

export function lineSeparator() {
	const separatorChar = '─';

	let separatorLine = '';

	for (let i = 0; i < DEFAULT_SEPARATOR_LENGTH; i++) {
		separatorLine = separatorLine.concat(separatorChar);
	}

	return new inquirer.Separator(separatorLine);
}
