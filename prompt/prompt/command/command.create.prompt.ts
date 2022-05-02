import inquirer from 'inquirer';

import { Executor } from '../../../global/types';
import MESSAGE from '../../../lib/ui/message';
import { Command } from '../../../model/command.model';
import { Environment } from '../../../model/environment.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { EnvironmentRepository } from '../../../model/repository/environment.repository';
import { DirectoryQuestion } from '../../question/directory.question';
import { InputQuestion } from '../../question/input.question';
import { SelectQuestion } from '../../question/select.question';
import { CommandDirectoryValidator } from '../../validator/command.directory.validator';
import { CommandNameValidator } from '../../validator/command.name.validator';
import { CommandScriptValidator } from '../../validator/command.script.validator';
import { AbstractPrompt } from '../abstract.prompt';

interface CommandCreatePromptResult {
	command: Command;
}

export class CommandCreatePrompt extends AbstractPrompt {
	async prompt(id: Environment['id']): Promise<CommandCreatePromptResult> {
		const environment = EnvironmentRepository.get(id);

		const commandCreateNameQuestion = new InputQuestion(
			'name',
			MESSAGE.COMMAND_CREATE_NAME_QUESTION,
			{ default: 'Start application', validator: CommandNameValidator.validate },
		);

		const commandCreateScriptQuestion = new InputQuestion(
			'script',
			MESSAGE.COMMAND_CREATE_SCRIPT_QUESTION,
			{ default: 'start', validator: CommandScriptValidator.validate },
		);

		const commandCreateExecutorQuestion = new SelectQuestion(
			'executor',
			MESSAGE.COMMAND_CREATE_EXECUTOR_QUESTION,
			[
				Executor.NPM,
				Executor.YARN,
				Executor.DOCKER,
				Executor.DOCKER_COMPOSE,
			],
			{ default: environment.executor },
		);

		const commandCreateDirectoryQuestion = new DirectoryQuestion(
			'directory',
			MESSAGE.COMMAND_CREATE_DIRECTORY_QUESTION,
			{ validator: CommandDirectoryValidator.validate },
		);

		const data = await inquirer.prompt([
			commandCreateNameQuestion.ask(),
			commandCreateScriptQuestion.ask(),
			commandCreateExecutorQuestion.ask(),
			commandCreateDirectoryQuestion.ask(),
		]);

		const command = Command.create({ ...data, environmentId: environment.id });

		CommandRepository.insert(command);

		return { command };
	}
}
