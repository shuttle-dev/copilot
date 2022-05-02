import inquirer from 'inquirer';
import { map } from 'lodash';

import MESSAGE from '../../../lib/ui/message';
import { Environment } from '../../../model/environment.model';
import { EnvironmentRepository } from '../../../model/repository/environment.repository';
import { SelectQuestion } from '../../question/select.question';
import { lineSeparator } from '../../separator';
import { AbstractPrompt } from '../abstract.prompt';

interface EnvironmentListPromptResult {
	id: Environment['id'];
}

export class EnvironmentListPrompt extends AbstractPrompt {
	async prompt(): Promise<EnvironmentListPromptResult> {
		const environments = this.getEnvironments();

		const environmentListQuestion = new SelectQuestion(
			'id',
			MESSAGE.ENVIRONMENT_LIST_QUESTION,
			[
				...environments,
				lineSeparator(),
				{ name: MESSAGE.MENU_BACK_QUESTION, value: undefined },
			],
		);

		const { id } = await inquirer.prompt([
			environmentListQuestion.ask(),
		]);

		return { id };
	}

	private getEnvironments() {
		const environments = EnvironmentRepository.getAll();

		return map(environments, (environment) => ({
			name: environment.name,
			value: environment.id,
		}));
	}
}
