import inquirer from 'inquirer';

import MESSAGE from '../../lib/ui/message';
import { SelectQuestion } from '../question/select.question';
import { lineSeparator } from '../separator';
import { AbstractPrompt } from './abstract.prompt';

export class MenuPrompt extends AbstractPrompt {
	async prompt(): Promise<string> {
		const menuQuestion = new SelectQuestion(
			'menu',
			MESSAGE.MENU_QUESTION,
			[
				{ name: MESSAGE.MENU_CREATE_ENVIRONMENT_QUESTION, value: '/environment/create' },
				{ name: MESSAGE.MENU_UPDATE_ENVIRONMENT_QUESTION, value: '/environment/list' },
				{ name: MESSAGE.MENU_SETTINGS_QUESTION, value: '/settings' },
				lineSeparator(),
				{ name: MESSAGE.MENU_QUIT_QUESTION, value: undefined },
			],
		);

		const answers = await inquirer.prompt([
			menuQuestion.ask(),
		]);

		return answers.menu;
	}
}
