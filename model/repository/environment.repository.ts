import { Database } from '../../lib/database/database';
import { Environment } from '../environment.model';

export class EnvironmentRepository {
	static insert(environment: Environment) {
		const db = Database.getInstance();
		db.createEnvironment(environment);
	}

	static update(environment: Environment): Environment {
		const db = Database.getInstance();
		db.updateEnvironment(environment.id, { ...environment });
		return environment;
	}

	static get(id: Environment['id']): Environment {
		const db = Database.getInstance();
		return db.getEnvironmentById(id);
	}

	static getAll(): Environment[] {
		const db = Database.getInstance();
		return db.getEnvironments();
	}

	static getByName(name: Environment['name']): Environment {
		const db = Database.getInstance();
		return db.getEnvironmentByName(name);
	}

	static delete(id: Environment['id']): void {
		const db = Database.getInstance();
		db.deleteEnvironment(id);
	}
}
