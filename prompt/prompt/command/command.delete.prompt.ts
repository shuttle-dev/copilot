import inquirer from 'inquirer';

import MESSAGE from '../../../lib/ui/message';
import { Command } from '../../../model/command.model';
import { Environment } from '../../../model/environment.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { ConfirmQuestion } from '../../question/confirm.question';
import { AbstractPrompt } from '../abstract.prompt';

export interface CommandDeletePromptResult {
	confirm: boolean;
	environmentId: Environment['id'];
}

export class CommandDeletePrompt extends AbstractPrompt {
	async prompt(id: Command['id']): Promise<CommandDeletePromptResult> {
		const command = CommandRepository.get(id);

		const deleteQuestion = new ConfirmQuestion(
			'confirm',
			MESSAGE.COMMAND_UPDATE_DELETE_QUESTION(command.name),
		);

		const { confirm } = await inquirer.prompt([
			deleteQuestion.ask(),
		]);

		if (confirm) {
			CommandRepository.delete(id);
		}

		return { confirm, environmentId: command.environmentId };
	}
}
