import inquirer from 'inquirer';

import MESSAGE from '../../../lib/ui/message';
import { Command } from '../../../model/command.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { InputQuestion } from '../../question/input.question';
import { CommandScriptValidator } from '../../validator/command.script.validator';
import { AbstractPrompt } from '../abstract.prompt';

export class CommandScriptPrompt extends AbstractPrompt {
	async prompt(id: Command['id']): Promise<void> {
		const command = CommandRepository.get(id);

		const commandScriptQuestion = new InputQuestion(
			'script',
			MESSAGE.COMMAND_UPDATE_SCRIPT_QUESTION,
			{ default: command.script, validator: CommandScriptValidator.validate },
		);

		const { script } = await inquirer.prompt([
			commandScriptQuestion.ask(),
		]);

		command.setScript(script);

		CommandRepository.update(command);
	}
}
