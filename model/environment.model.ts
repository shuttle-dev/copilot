import { v4 as uuid } from 'uuid';

import { Executor } from '../global/types';
import { StaticFactory } from './factory/static.factory';

export class Environment extends StaticFactory {
	id: string;

	name: string = '';

	executor: Executor = Executor.YARN;

	constructor() {
		super();

		this.id = uuid();
	}

	setName(name: string) {
		this.name = name;
	}

	setExecutor(executor: Executor) {
		this.executor = executor;
	}
}
