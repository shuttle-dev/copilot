import { Executor, PrefixFormat } from '../global/types';
import { StaticFactory } from './factory/static.factory';

export class Settings extends StaticFactory {
	executor = Executor.YARN;

	prefixFormat = PrefixFormat.NAME;

	static defaults: Settings = Settings.create({
		executor: Executor.YARN,
		prefixFormat: PrefixFormat.NAME,
	});

	setExecutor(executor: Executor) {
		this.executor = executor;
	}

	setPrefixFormat(prefixFormat: PrefixFormat) {
		this.prefixFormat = prefixFormat;
	}
}
