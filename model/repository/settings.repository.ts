import { Database } from '../../lib/database/database';
import { Settings } from '../settings.model';

export class SettingsRepository {
	static update(settings: Settings): Settings {
		const db = Database.getInstance();
		db.updateSettings(settings);
		return Settings.create(settings);
	}

	static get(): Settings {
		const db = Database.getInstance();
		const data = db.getSettings();

		return Settings.create(data);
	}
}
