import MESSAGE from '../../lib/ui/message';
import { Settings } from '../../model/settings.model';

export class SettingsPrefixFormatValidator {
	static validate(prefixFormat: Settings['prefixFormat']) {
		if (!prefixFormat.trim()) {
			return MESSAGE.SETTINGS_UPDATE_PREFIX_FORMAT_NOT_EMPTY_VALIDATION;
		}

		return true;
	}
}
