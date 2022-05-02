import MESSAGE from '../../lib/ui/message';
import { Command } from '../../model/command.model';

export class CommandDirectoryValidator {
	static validate(directory: Command['directory']) {
		if (!directory.trim()) {
			return MESSAGE.COMMAND_DIRECTORY_NOT_EMPTY_VALIDATION;
		}

		return true;
	}
}
