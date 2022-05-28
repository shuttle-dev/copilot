import MESSAGE from '../../lib/ui/message';
import { Command } from '../../model/command.model';

export class CommandEnvironmentVariablesValidator {
	static validate(environmentVariables: Command['environmentVariables']) {
		if (!environmentVariables.trim()) {
			return MESSAGE.COMMAND_SCRIPT_NOT_EMPTY_VALIDATION;
		}

		return true;
	}
}
