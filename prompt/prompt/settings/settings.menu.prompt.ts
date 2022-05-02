import inquirer from 'inquirer';

import MESSAGE from '../../../lib/ui/message';
import { SettingsRepository } from '../../../model/repository/settings.repository';
import { SelectQuestion } from '../../question/select.question';
import { lineSeparator } from '../../separator';
import { AbstractPrompt } from '../abstract.prompt';

interface SettingsMenuPromptResult {
	menu: string;
}

export class SettingsMenuPrompt extends AbstractPrompt {
	async prompt(): Promise<SettingsMenuPromptResult> {
		const settings = SettingsRepository.get();

		const settingsMenuQuestion = new SelectQuestion(
			'menu',
			MESSAGE.SETTINGS_MENU_QUESTION,
			[
				{ name: MESSAGE.SETTINGS_MENU_EXECUTOR_QUESTION(settings.executor), value: '/settings/executor' },
				{ name: MESSAGE.SETTINGS_MENU_PREFIX_FORMAT_QUESTION(settings.prefixFormat), value: '/settings/prefix-format' },
				lineSeparator(),
				{ name: MESSAGE.MENU_BACK_QUESTION, value: '/' },
			],
		);

		const { menu } = await inquirer.prompt([
			settingsMenuQuestion.ask(),
		]);

		return { menu };
	}
}
