import inquirer from 'inquirer';

import { Executor } from '../../../global/types';
import MESSAGE from '../../../lib/ui/message';
import generateRandomName from '../../../lib/util/generator';
import { Environment } from '../../../model/environment.model';
import { EnvironmentRepository } from '../../../model/repository/environment.repository';
import { InputQuestion } from '../../question/input.question';
import { SelectQuestion } from '../../question/select.question';
import { AbstractPrompt } from '../abstract.prompt';

interface EnvironmentCreatePromptResult {
	environment: Environment;
}

export class EnvironmentCreatePrompt extends AbstractPrompt {
	async prompt(): Promise<EnvironmentCreatePromptResult> {
		const nameQuestion = new InputQuestion(
			'name',
			MESSAGE.ENVIRONMENT_CREATE_NAME_QUESTION,
			{ default: generateRandomName() },
		);

		const executorQuestion = new SelectQuestion(
			'executor',
			MESSAGE.ENVIRONMENT_CREATE_EXECUTOR_QUESTION,
			[
				Executor.NPM,
				Executor.YARN,
				Executor.DOCKER,
				Executor.DOCKER_COMPOSE,
			],
			{ default: Executor.YARN },
		);

		const data = await inquirer.prompt([
			nameQuestion.ask(),
			executorQuestion.ask(),
		]);

		const environment = Environment.create(data);

		EnvironmentRepository.insert(environment);

		return { environment };
	}
}
