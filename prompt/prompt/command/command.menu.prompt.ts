import inquirer from 'inquirer';

import MESSAGE from '../../../lib/ui/message';
import { Command } from '../../../model/command.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { SelectQuestion } from '../../question/select.question';
import { lineSeparator } from '../../separator';
import { AbstractPrompt } from '../abstract.prompt';

interface CommandMenuPromptResult {
	menu: string;
}

export class CommandMenuPrompt extends AbstractPrompt {
	async prompt(id: Command['id']): Promise<CommandMenuPromptResult> {
		const command = CommandRepository.get(id);

		const commandMenuQuestion = new SelectQuestion(
			'menu',
			MESSAGE.COMMAND_MENU_QUESTION(command.name),
			[
				{ name: MESSAGE.COMMAND_MENU_NAME_QUESTION(command.name), value: `/command/${id}/name` },
				{ name: MESSAGE.COMMAND_MENU_SCRIPT_QUESTION(command.script), value: `/command/${id}/script` },
				{ name: MESSAGE.COMMAND_MENU_ENVIRONMENT_VARIABLES_QUESTION(command.environmentVariables), value: `/command/${id}/environment-variables` },
				{ name: MESSAGE.COMMAND_MENU_PREFIX_COLOR_QUESTION(command.prefixColor), value: `/command/${id}/prefix-color` },
				{ name: MESSAGE.COMMAND_MENU_EXECUTOR_QUESTION(command.executor), value: `/command/${id}/executor` },
				{ name: MESSAGE.COMMAND_MENU_DIRECTORY_QUESTION(command.directory), value: `/command/${id}/directory` },
				{ name: MESSAGE.COMMAND_MENU_DELETE_QUESTION, value: `/command/${id}/delete` },
				lineSeparator(),
				{ name: MESSAGE.MENU_BACK_QUESTION, value: `/environment/${command.environmentId}/command/list` },
			],
		);

		const { menu } = await inquirer.prompt([
			commandMenuQuestion.ask(),
		]);

		return { menu };
	}
}
