import inquirer from 'inquirer';

import MESSAGE from '../../../lib/ui/message';
import { Command } from '../../../model/command.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { DirectoryQuestion } from '../../question/directory.question';
import { AbstractPrompt } from '../abstract.prompt';

export class CommandDirectoryPrompt extends AbstractPrompt {
	async prompt(id: Command['id']): Promise<void> {
		const command = CommandRepository.get(id);

		const commandDirectoryQuestion = new DirectoryQuestion(
			'directory',
			MESSAGE.COMMAND_UPDATE_DIRECTORY_QUESTION,
			{ default: command.directory },
		);

		const { directory } = await inquirer.prompt([
			commandDirectoryQuestion.ask(),
		]);

		command.setDirectory(directory);

		CommandRepository.update(command);
	}
}
