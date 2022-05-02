import fs from 'fs';

export const createDirIfNotExists = (directory: string): void => {
	if (!fs.existsSync(directory)) fs.mkdirSync(directory);
};
