#!/usr/bin/env node

import chalk from 'chalk';
import { Command } from 'commander';

import { DefaultAction } from '../action/default.action';
import { ListAction } from '../action/list.action';
import { MenuAction } from '../action/menu.action';
import { StartAction } from '../action/start.action';
import { DefaultCommand } from '../command/default.command';
import { ListCommand } from '../command/list.command';
import { MenuCommand } from '../command/menu.command';
import { StartCommand } from '../command/start.command';

const init = async () => {
	const program = new Command();

	program
		.version(require('../package.json').version, '-v, --version')
		.description(require('../package.json').description)
		.usage('<command> [options]')
		.helpOption('-h, --help', 'Output usage information.');

	new DefaultCommand(new DefaultAction()).load(program);
	new MenuCommand(new MenuAction()).load(program);
	new StartCommand(new StartAction()).load(program);
	new ListCommand(new ListAction()).load(program);

	program.on('command:*', () => {
		console.error(
			`\nInvalid command: ${chalk.red('%s')}`,
			program.args.join(' '),
		);
		console.log(
			`See ${chalk.red('--help')} for a list of available commands.\n`,
		);
		process.exit(1);
	});

	program.parse();
};

init().catch(console.error);
