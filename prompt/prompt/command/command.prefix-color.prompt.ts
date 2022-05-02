import chalk from 'chalk';
import inquirer from 'inquirer';

import { PrefixColor } from '../../../global/types';
import MESSAGE from '../../../lib/ui/message';
import { Command } from '../../../model/command.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { SelectQuestion } from '../../question/select.question';
import { AbstractPrompt } from '../abstract.prompt';

export class CommandPrefixColorPrompt extends AbstractPrompt {
	async prompt(id: Command['id']): Promise<void> {
		const command = CommandRepository.get(id);

		const commandPrefixColorQuestion = new SelectQuestion(
			'prefixColor',
			MESSAGE.COMMAND_UPDATE_PREFIX_COLOR_QUESTION,
			[
				{ name: chalk[PrefixColor.BLACK](PrefixColor.BLACK), value: PrefixColor.BLACK },
				{ name: chalk[PrefixColor.RED](PrefixColor.RED), value: PrefixColor.RED },
				{ name: chalk[PrefixColor.GREEN](PrefixColor.GREEN), value: PrefixColor.GREEN },
				{ name: chalk[PrefixColor.YELLOW](PrefixColor.YELLOW), value: PrefixColor.YELLOW },
				{ name: chalk[PrefixColor.BLUE](PrefixColor.BLUE), value: PrefixColor.BLUE },
				{ name: chalk[PrefixColor.MAGENTA](PrefixColor.MAGENTA), value: PrefixColor.MAGENTA },
				{ name: chalk[PrefixColor.CYAN](PrefixColor.CYAN), value: PrefixColor.CYAN },
				{ name: chalk[PrefixColor.WHITE](PrefixColor.WHITE), value: PrefixColor.WHITE },
				{ name: chalk[PrefixColor.GRAY](PrefixColor.GRAY), value: PrefixColor.GRAY },
			],
			{ default: command.prefixColor },
		);

		const answers = await inquirer.prompt<{ prefixColor: Command['prefixColor']; }>([
			commandPrefixColorQuestion.ask(),
		]);

		command.setPrefixColor(answers.prefixColor);

		CommandRepository.update(command);
	}
}
