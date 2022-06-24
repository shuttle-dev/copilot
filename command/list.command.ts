import { Command } from 'commander';

import { AbstractCommand } from './abstract.command';

export class ListCommand extends AbstractCommand {
	public load(program: Command) {
		program
			.command('list')
			.alias('l')
			.description('list available environments')
			.action(async () => {
				try {
					await this.action.handle();
				} catch (err: any) {
					console.log(err.message);
					process.exit(1);
				}
			});
	}
}
