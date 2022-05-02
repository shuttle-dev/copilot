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

	public static get configDir(): string {
		return `${Config.homeDir}/.shuttle`;
	}

	public static get workingDir(): string {
		return process.cwd();
	}
}
