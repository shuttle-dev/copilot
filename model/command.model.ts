import { v4 as uuid } from 'uuid';

import { Executor, PrefixColor } from '../global/types';
import { StaticFactory } from './factory/static.factory';

export class Command extends StaticFactory {
	id: string;

	environmentId: string = '';

	name: string = '';

	script: string = '';

	prefixColor: PrefixColor = PrefixColor.YELLOW;

	executor: Executor = Executor.YARN;

	directory: string = process.cwd();

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
