import inquirer from 'inquirer';

import { Executor } from '../../../global/types';
import MESSAGE from '../../../lib/ui/message';
import { SettingsRepository } from '../../../model/repository/settings.repository';
import { SelectQuestion } from '../../question/select.question';
import { AbstractPrompt } from '../abstract.prompt';

export class SettingsExecutorPrompt extends AbstractPrompt {
	async prompt(): Promise<void> {
		const settings = SettingsRepository.get();

		const settingsExecutorQuestion = new SelectQuestion(
			'executor',
			MESSAGE.SETTINGS_UPDATE_EXECUTOR_QUESTION,
			[
				Executor.NPM,
				Executor.YARN,
				Executor.DOCKER,
				Executor.DOCKER_COMPOSE,
			],
			{ default: settings.executor },
		);

		const { executor } = await inquirer.prompt([
			settingsExecutorQuestion.ask(),
		]);

		settings.setExecutor(executor);

		SettingsRepository.update(settings);
	}
}
