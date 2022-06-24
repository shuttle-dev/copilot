import concurrently from 'concurrently';

import { Database } from '../lib/database/database';
import { CommandRepository } from '../model/repository/command.repository';
import { EnvironmentRepository } from '../model/repository/environment.repository';
import { SettingsRepository } from '../model/repository/settings.repository';
import {
	AbstractAction,
	getInputValue,
	Input,
} from './abstract.action';

export class DefaultAction extends AbstractAction {
	public async handle(inputs: Input[], options: Input[]) {
		const config = getInputValue(options, 'config');
		Database.setConfing(config);

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

		try {
			await new Promise((resolve, reject) => {
				const { result } = concurrently(commands, {
					prefix: `${settings.prefixFormat} `,
					timestampFormat: 'dd.MM.yyyy, hh:mm:ss',
					killOthers: ['failure', 'success'],
					restartTries: 3,
				});

				result.then(resolve, reject);
			});

			process.exit(0);
		} catch (err) {
			console.log(err);
			process.exit(1);
		}
	}
}
