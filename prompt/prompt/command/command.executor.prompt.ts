import inquirer from 'inquirer';

import { Executor } from '../../../global/types';
import MESSAGE from '../../../lib/ui/message';
import { Command } from '../../../model/command.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { SelectQuestion } from '../../question/select.question';
import { AbstractPrompt } from '../abstract.prompt';

export class CommandExecutorPrompt extends AbstractPrompt {
	async prompt(id: Command['id']): Promise<void> {
		const command = CommandRepository.get(id);

		const commandExecutorQuestion = new SelectQuestion(
			'executor',
			MESSAGE.COMMAND_UPDATE_EXECUTOR_QUESTION,
			[
				Executor.NPM,
				Executor.YARN,
				Executor.DOCKER,
				Executor.DOCKER_COMPOSE,
			],
			{ default: command.executor },
		);

		const { executor } = await inquirer.prompt([
			commandExecutorQuestion.ask(),
		]);

		command.setExecutor(executor);

		CommandRepository.update(command);
	}
}
