import fs from 'fs';

export const ensureDirectoryExists = (directory: string): void => {
	if (!fs.existsSync(directory)) fs.mkdirSync(directory);
};

export const ensureFileExists = (file: string): void => {
	if (!fs.existsSync(file)) throw new Error(`Configuration file not found: ${file}`);
};
