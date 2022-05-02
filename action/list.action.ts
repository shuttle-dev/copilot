import chalk from 'chalk';
import Table from 'cli-table3';
import { each } from 'lodash';

import { CommandRepository } from '../model/repository/command.repository';
import { EnvironmentRepository } from '../model/repository/environment.repository';
import { AbstractAction } from './abstract.action';

export class ListAction extends AbstractAction {
	public async handle() {
		const environments = EnvironmentRepository.getAll();

		const table: any = new Table({ head: ['name', 'executor', 'command', 'directory'], wordWrap: false });

		each(environments, (environment) => {
			table.push([
				{ content: environment.name },
				{ content: chalk.dim(environment.executor) },
				{ content: '' },
				{ content: '' },
			]);

			const commands = CommandRepository.getAll(environment.id);

			each(commands, (command) => table.push([
				{ content: chalk.dim(environment.name) },
				{ content: command.executor },
				{ content: command.name },
				{ content: command.directory },
			]));
		});

		console.log(table.toString());
	}
}
