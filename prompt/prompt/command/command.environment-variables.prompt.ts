import inquirer from 'inquirer';

import MESSAGE from '../../../lib/ui/message';
import { Command } from '../../../model/command.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { InputQuestion } from '../../question/input.question';
import { AbstractPrompt } from '../abstract.prompt';

export class CommandEnvironmentVariablesPrompt extends AbstractPrompt {
	async prompt(id: Command['id']): Promise<void> {
		const command = CommandRepository.get(id);

		const commandEnvironmentVariablesQuestion = new InputQuestion(
			'environmentVariables',
			MESSAGE.COMMAND_UPDATE_ENVIRONMENT_VARIABLES_QUESTION,
			{ default: command.environmentVariables },
		);

		const { environmentVariables } = await inquirer.prompt([
			commandEnvironmentVariablesQuestion.ask(),
		]);

		command.setEnvironmentVariables(environmentVariables);

		CommandRepository.update(command);
	}
}
