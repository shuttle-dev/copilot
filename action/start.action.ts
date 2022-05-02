import concurrently from 'concurrently';

import { CommandRepository } from '../model/repository/command.repository';
import { EnvironmentRepository } from '../model/repository/environment.repository';
import { SettingsRepository } from '../model/repository/settings.repository';
import {
	AbstractAction,
	getInputValue,
	Input,
} from './abstract.action';

export class StartAction extends AbstractAction {
	public async handle(inputs: Input[]) {
		const name = getInputValue(inputs, 'environment');
		const environment = EnvironmentRepository.getByName(name);

		if (!environment) {
			throw new Error(`Environment ${name} not found.`);
		}

		const commands = CommandRepository.getConcurrentlyCommands(environment.id);

		if (!commands) {
			throw new Error(`No commands for environment ${name} found.`);
		}

		const settings = SettingsRepository.get();

		// @TODO: optimize process termination
		concurrently(commands, {
			prefix: `${settings.prefixFormat} `,
			timestampFormat: 'dd.MM.yyyy, hh:mm:ss',
			killOthers: ['failure', 'success'],
			restartTries: 3,
		});
	}
}
