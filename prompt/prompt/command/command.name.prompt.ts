import inquirer from 'inquirer';

import MESSAGE from '../../../lib/ui/message';
import { Command } from '../../../model/command.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { InputQuestion } from '../../question/input.question';
import { CommandNameValidator } from '../../validator/command.name.validator';
import { AbstractPrompt } from '../abstract.prompt';

export class CommandNamePrompt extends AbstractPrompt {
	async prompt(id: Command['id']): Promise<void> {
		const command = CommandRepository.get(id);

		const commandNameQuestion = new InputQuestion(
			'name',
			MESSAGE.COMMAND_UPDATE_NAME_QUESTION,
			{ default: command.name, validator: CommandNameValidator.validate },
		);

		const { name } = await inquirer.prompt([
			commandNameQuestion.ask(),
		]);

		command.setName(name);

		CommandRepository.update(command);
	}
}
