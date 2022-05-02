import inquirer from 'inquirer';
import { map } from 'lodash';

import MESSAGE from '../../../lib/ui/message';
import { Command } from '../../../model/command.model';
import { Environment } from '../../../model/environment.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { SelectQuestion } from '../../question/select.question';
import { lineSeparator } from '../../separator';
import { AbstractPrompt } from '../abstract.prompt';

export interface CommandListPromptResult {
	id: Command['id'];
}

export class CommandListPrompt extends AbstractPrompt {
	async prompt(environmentId: Environment['id']): Promise<CommandListPromptResult> {
		const commands = this.getCommands(environmentId);

		const commandListQuestion = new SelectQuestion(
			'id',
			MESSAGE.COMMAND_LIST_QUESTION,
			[
				...commands,
				lineSeparator(),
				{ name: MESSAGE.MENU_BACK_QUESTION, value: undefined },
			],
		);

		const { id } = await inquirer.prompt([
			commandListQuestion.ask(),
		]);

		return { id };
	}

	private getCommands(id: Environment['id']) {
		const commands = CommandRepository.getAll(id);

		return map(commands, (command) => ({
			name: command.name,
			value: command.id,
		}));
	}
}
