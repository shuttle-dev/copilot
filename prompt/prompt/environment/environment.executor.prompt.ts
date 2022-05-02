import inquirer from 'inquirer';

import { Executor } from '../../../global/types';
import MESSAGE from '../../../lib/ui/message';
import { Environment } from '../../../model/environment.model';
import { EnvironmentRepository } from '../../../model/repository/environment.repository';
import { SelectQuestion } from '../../question/select.question';
import { AbstractPrompt } from '../abstract.prompt';

export class EnvironmentExecutorPrompt extends AbstractPrompt {
	async prompt(id: Environment['id']): Promise<void> {
		const environment = EnvironmentRepository.get(id);

		const environmentExecutorQuestion = new SelectQuestion(
			'executor',
			MESSAGE.ENVIRONMENT_UPDATE_EXECUTOR_QUESTION,
			[
				Executor.NPM,
				Executor.YARN,
				Executor.DOCKER,
				Executor.DOCKER_COMPOSE,
			],
			{ default: environment.executor },
		);

		const { executor } = await inquirer.prompt([
			environmentExecutorQuestion.ask(),
		]);

		const data = Environment.create({ ...environment, executor });

		EnvironmentRepository.update(data);
	}
}
