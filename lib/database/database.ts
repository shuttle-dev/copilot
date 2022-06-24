import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { join } from 'path';

import { Command } from '../../model/command.model';
import { Environment } from '../../model/environment.model';
import { Settings } from '../../model/settings.model';
import { Config } from '../config/config';
import { ensureDirectoryExists, ensureFileExists } from '../util/filesystem';

interface IFileSync {
	createdAt: Date;
	updatedAt: Date;
	settings: Settings;
	environments: Environment[];
	commands: Command[];
}

export class Database {
	static instance: Database;

	static config: string;

	private readonly file;

	private readonly adapter;

	private db;

	static defaults = {
		createdAt: new Date(),
		updatedAt: new Date(),
		settings: Settings.defaults,
		environments: new Array<Environment>(),
		commands: new Array<Command>(),
	};

	private constructor() {
		if (Database.config) {
			ensureFileExists(Database.config);
			this.file = Database.config;
		} else {
			ensureDirectoryExists(Config.configDir);
			this.file = join(Config.configDir, 'config.json');
		}

		this.adapter = new FileSync<IFileSync>(this.file);
		this.db = lowdb(this.adapter);

		this.db.defaults(Database.defaults).write();
	}

	public static getInstance(): Database {
		if (!Database.instance) {
			Database.instance = new Database();
		}

		return Database.instance;
	}

	public static setConfing(config: string): void {
		Database.config = config;
	}

	private updateUpdatedAt() {
		this.db.set('updatedAt', new Date()).write();
	}

	public createEnvironment(environment: Environment) {
		this.db
			.get('environments')
			.push(environment)
			.write();

		this.updateUpdatedAt();
	}

	public getEnvironmentBy<T, K extends keyof Environment>(key: K, value: T): Environment {
		return this.db.get('environments').find({ [key]: value }).value();
	}

	public getEnvironmentById(id: Environment['id']): Environment {
		return this.getEnvironmentBy('id', id);
	}

	public getEnvironmentByName(name: Environment['name']): Environment {
		return this.getEnvironmentBy('name', name);
	}

	public getEnvironments(): Environment[] {
		return this.db.get('environments').value();
	}

	public updateEnvironment<T extends keyof Environment>(id: Environment['id'], values: Record<T, string | number>): void {
		this.db
			.get('environments')
			.find({ id })
			.assign(values)
			.write();

		this.updateUpdatedAt();
	}

	public deleteEnvironment(id: Environment['id']): void {
		this.db
			.get('environments')
			.remove({ id })
			.write();

		this.updateUpdatedAt();
	}

	public createCommand(command: Command): void {
		this.db
			.get('commands')
			.push(command)
			.write();

		this.updateUpdatedAt();
	}

	public getCommandBy<T, K extends keyof Command>(key: K, value: T): Command {
		return this.db.get('commands').find({ [key]: value }).value();
	}

	public getCommandById(id: Command['id']): Command {
		return this.getCommandBy('id', id);
	}

	public getCommandByName(name: Command['name']): Command {
		return this.getCommandBy('name', name);
	}

	public getCommands(environmentId: Environment['id']): Command[] {
		return this.db
			.get('commands')
			.filter({ environmentId })
			.value();
	}

	public updateCommand<T extends keyof Command>(id: Command['id'], values: Record<T, string | number>): void {
		this.db
			.get('commands')
			.find({ id })
			.assign(values)
			.write();

		this.updateUpdatedAt();
	}

	public deleteCommand(id: Command['id']): void {
		this.db
			.get('commands')
			.remove({ id })
			.write();

		this.updateUpdatedAt();
	}

	public deleteCommands(environmentId: Environment['id']): void {
		this.db
			.get('commands')
			.remove({ environmentId })
			.write();

		this.updateUpdatedAt();
	}

	public getSettings(): Settings {
		return this.db.get('settings').value();
	}

	public updateSettings(settings: Settings): void {
		this.db
			.get('settings')
			.assign(settings)
			.write();

		this.updateUpdatedAt();
	}
}
