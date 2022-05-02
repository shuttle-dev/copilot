import MESSAGE from '../../lib/ui/message';
import { Environment } from '../../model/environment.model';
import { EnvironmentRepository } from '../../model/repository/environment.repository';

export class EnvironmentNameValidator {
	static validate(id: Environment['id'], name: Environment['name']) {
		const environment = EnvironmentRepository.getByName(name);

		if (environment && environment.id !== id) {
			return MESSAGE.ENVIRONMENT_NAME_EXISTS_VALIDATION(name);
		}

		if (!name.trim()) {
			return MESSAGE.ENVIRONMENT_NAME_NOT_EMPTY_VALIDATION;
		}

		return true;
	}
}
