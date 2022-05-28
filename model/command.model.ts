import { v4 as uuid } from 'uuid';

import {
	Executor,
	PrefixColor,
	PrefixFormat,
} from '../global/types';
import { StaticFactory } from './factory/static.factory';

export class Command extends StaticFactory {
	id: string;

	environmentId: string = '';

	name: string = '';

	script: string = '';

	environmentVariables: string = '';

	prefixColor: PrefixColor = PrefixColor.YELLOW;

	executor: Executor = Executor.YARN;

	directory: string = process.cwd();

	static defaults: Command = Command.create({
		id: uuid(),
		environmentId: '',
		name: '',
		script: '',
		prefixFormat: PrefixFormat.NAME,
		executor: Executor.YARN,
		directory: process.cwd(),
	});

	constructor() {
		super();

		this.id = uuid();
	}

	setEnvironmentId(environmentId: string) {
		this.environmentId = environmentId;
	}

	setName(name: string) {
		this.name = name;
	}

	setScript(script: string) {
		this.script = script;
	}

	setEnvironmentVariables(environmentVariables: string) {
		this.environmentVariables = environmentVariables;
	}

	setPrefixColor(prefixColor: PrefixColor) {
		this.prefixColor = prefixColor;
	}

	setExecutor(executor: Executor) {
		this.executor = executor;
	}

	setDirectory(directory: string) {
		this.directory = directory;
	}
}
