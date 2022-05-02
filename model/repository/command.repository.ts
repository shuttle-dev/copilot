import { ConcurrentlyCommandInput } from 'concurrently';
import { map } from 'lodash';

import { Database } from '../../lib/database/database';
import { Command } from '../command.model';
import { Environment } from '../environment.model';

export class CommandRepository {
	static insert(command: Command) {
		const db = Database.getInstance();
		db.createCommand(command);
	}

	static update(command: Command): void {
		const db = Database.getInstance();
		db.updateCommand(command.id, { ...command });
	}

	static get(id: Command['id']): Command {
		const db = Database.getInstance();
		const data = db.getCommandById(id);
		return Command.create(data);
	}

	static getByName(name: Command['name']): Command {
		const db = Database.getInstance();
		const data = db.getCommandByName(name);
		return Command.create(data);
	}

	static getAll(id: Environment['id']): Command[] {
		const db = Database.getInstance();
		const commands = db.getCommands(id);
		return map(commands, (command) => Command.create(command));
	}

	static delete(id: Command['id']): void {
		const db = Database.getInstance();
		db.deleteCommand(id);
	}

	static deleteAll(id: Environment['id']): void {
		const db = Database.getInstance();
		return db.deleteCommands(id);
	}

	static getConcurrentlyCommands(id: Environment['id']): ConcurrentlyCommandInput[] {
		const commands = CommandRepository.getAll(id);

		return map(commands, (command) => ({
			prefixColor: command.prefixColor,
			command: `${command.executor} ${command.script}`,
			name: command.name,
			cwd: command.directory,
		}));
	}
}
