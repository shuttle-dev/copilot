import inquirer from 'inquirer';

import MESSAGE from '../../../lib/ui/message';
import { Environment } from '../../../model/environment.model';
import { EnvironmentRepository } from '../../../model/repository/environment.repository';
import { InputQuestion } from '../../question/input.question';
import { EnvironmentNameValidator } from '../../validator/environment.name.validator';
import { AbstractPrompt } from '../abstract.prompt';

export class EnvironmentNamePrompt extends AbstractPrompt {
	async prompt(id: Environment['id']): Promise<void> {
		const environment = EnvironmentRepository.get(id);

		const environmentNameQuestion = new InputQuestion(
			'name',
			MESSAGE.ENVIRONMENT_UPDATE_NAME_QUESTION,
			{ default: environment.name, validator: (input: string) => EnvironmentNameValidator.validate(environment.id, input) },
		);

		const { name } = await inquirer.prompt([
			environmentNameQuestion.ask(),
		]);

		const data = Environment.create({ ...environment, name });

		EnvironmentRepository.update(data);
	}
}
