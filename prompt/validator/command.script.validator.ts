import MESSAGE from '../../lib/ui/message';
import { Command } from '../../model/command.model';

export class CommandScriptValidator {
	static validate(script: Command['script']) {
		if (!script.trim()) {
			return MESSAGE.COMMAND_SCRIPT_NOT_EMPTY_VALIDATION;
		}

		return true;
	}
}
