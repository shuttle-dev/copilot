import { join } from 'path';

export class ConfigHomeDirNotFoundException extends Error {
	constructor(message: string) {
		super(message);

		Object.setPrototypeOf(this, ConfigHomeDirNotFoundException.prototype);
	}
}

export class Config {
	static instance: Config;

	private constructor() {
		// no-op
	}

	public static getInstance(): Config {
		if (!Config.instance) {
			Config.instance = new Config();
		}

		return Config.instance;
	}

	public static get homeDir(): string {
		const directory = process.env.USERPROFILE || process.env.HOME;

		if (!directory) {
			throw new ConfigHomeDirNotFoundException('Home directory not found.');
		}

		return directory;
	}

	public static get configDirectoryName(): string {
		return '.shuttle';
	}

	public static get configFileName(): string {
		return 'config.json';
	}

	public static get workingDir(): string {
		return process.cwd();
	}

	public static get configDirectory(): string {
		return join(Config.homeDir, Config.configDirectoryName);
	}

	public static get configFile(): string {
		return join(Config.homeDir, Config.configDirectoryName, Config.configFileName);
	}

	public static get localConfigFile(): string {
		return join(Config.workingDir, Config.configDirectoryName, Config.configFileName);
	}
}
