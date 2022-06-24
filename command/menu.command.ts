import { Command } from 'commander';

import { AbstractCommand } from './abstract.command';

export class MenuCommand extends AbstractCommand {
	public load(program: Command) {
		program
			.command('menu')
			.description('display copilot main menu')
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
