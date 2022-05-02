import { Command } from 'commander';

import { Input } from '../action/abstract.action';
import { AbstractCommand } from './abstract.command';

export class StartCommand extends AbstractCommand {
	public load(program: Command) {
		program
			.command('start [environment]')
			.alias('s')
			.description('start a copilot environment')
			.action(async (environment: string) => {
				const inputs: Input[] = [];
				inputs.push({ name: 'environment', value: environment });

				try {
					await this.action.handle(inputs);
				} catch (err: any) {
					console.log(err.message);
					process.exit(1);
				}
			});
	}
}
