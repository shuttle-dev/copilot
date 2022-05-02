import MESSAGE from '../../lib/ui/message';
import { Command } from '../../model/command.model';

export class CommandNameValidator {
	static validate(name: Command['name']) {
		if (!name.trim()) {
			return MESSAGE.COMMAND_NAME_NOT_EMPTY_VALIDATION;
		}

		return true;
	}
}
