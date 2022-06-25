import fs from 'fs';

export const ensureDirectoryExists = (directory: string): void => {
	if (!fs.existsSync(directory)) fs.mkdirSync(directory);
};

export const ensureFileExists = (file: string): boolean => fs.existsSync(file);
