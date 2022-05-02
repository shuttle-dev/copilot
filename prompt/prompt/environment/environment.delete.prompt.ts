import inquirer from 'inquirer';

import MESSAGE from '../../../lib/ui/message';
import { Environment } from '../../../model/environment.model';
import { CommandRepository } from '../../../model/repository/command.repository';
import { EnvironmentRepository } from '../../../model/repository/environment.repository';
import { ConfirmQuestion } from '../../question/confirm.question';
import { AbstractPrompt } from '../abstract.prompt';

interface EnvironmentDeletePromptResult {
	confirm: boolean;
	id: Environment['id'];
}

export class EnvironmentDeletePrompt extends AbstractPrompt {
	async prompt(id: Environment['id']): Promise<EnvironmentDeletePromptResult> {
		const environment = EnvironmentRepository.get(id);

		const deleteQuestion = new ConfirmQuestion(
			'confirm',
			MESSAGE.ENVIRONMENT_UPDATE_DELETE_QUESTION(environment.name),
		);

		const { confirm } = await inquirer.prompt([
			deleteQuestion.ask(),
		]);

		if (confirm) {
			EnvironmentRepository.delete(id);
			CommandRepository.deleteAll(id);
		}

		return { confirm, id };
	}
}
