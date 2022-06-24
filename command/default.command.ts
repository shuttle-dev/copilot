import { Command } from 'commander';

import { Input } from '../action/abstract.action';
import { AbstractCommand } from './abstract.command';

export class DefaultCommand extends AbstractCommand {
	public load(program: Command) {
		program
			.argument('<environment>')
			.option('-c, --config <config>', 'copilot configuration file', '.shuttle/config.json')
			.description('start a project specific copilot environment (default)')
			.action(async (environment, command) => {
				try {
					const options: Input[] = [];
					options.push({ name: 'config', value: command.config });

					const inputs: Input[] = [];
					inputs.push({ name: 'environment', value: environment });

					await this.action.handle(inputs, options);
				} catch (err: any) {
					console.log(err.message);
					process.exit(1);
				}
			});
	}
}
