import inquirer from 'inquirer';

import MESSAGE from '../../../lib/ui/message';
import { Environment } from '../../../model/environment.model';
import { EnvironmentRepository } from '../../../model/repository/environment.repository';
import { SelectQuestion } from '../../question/select.question';
import { lineSeparator } from '../../separator';
import { AbstractPrompt } from '../abstract.prompt';

interface EnvironmentMenuPromptResult {
	menu: string;
}

export class EnvironmentMenuPrompt extends AbstractPrompt {
	async prompt(id: Environment['id']): Promise<EnvironmentMenuPromptResult> {
		const environment = EnvironmentRepository.get(id);

		const environmentMenuQuestion = new SelectQuestion(
			'menu',
			MESSAGE.ENVIRONMENT_MENU_QUESTION(environment.name),
			[
				{ name: MESSAGE.ENVIRONMENT_MENU_NAME_QUESTION(environment.name), value: `/environment/${id}/name` },
				{ name: MESSAGE.ENVIRONMENT_MENU_COMMAND_CREATE_QUESTION, value: `/environment/${id}/command/create` },
				{ name: MESSAGE.ENVIRONMENT_MENU_COMMAND_LIST_QUESTION, value: `/environment/${id}/command/list` },
				{ name: MESSAGE.ENVIRONMENT_MENU_EXECUTOR_QUESTION(environment.executor), value: `/environment/${id}/executor` },
				{ name: MESSAGE.ENVIRONMENT_MENU_DELETE_QUESTION, value: `/environment/${id}/delete` },
				lineSeparator(),
				{ name: MESSAGE.MENU_BACK_QUESTION, value: '/environment/list' },
			],
		);

		const { menu } = await inquirer.prompt([
			environmentMenuQuestion.ask(),
		]);

		return { menu };
	}
}
