import inquirer from 'inquirer';

import { PrefixFormat } from '../../../global/types';
import { EMOJIS } from '../../../lib/ui/emoji';
import MESSAGE from '../../../lib/ui/message';
import { SettingsRepository } from '../../../model/repository/settings.repository';
import { Settings } from '../../../model/settings.model';
import { InputQuestion } from '../../question/input.question';
import { SelectQuestion } from '../../question/select.question';
import { SettingsPrefixFormatValidator } from '../../validator/settings.prefix-format.validator';
import { AbstractPrompt } from '../abstract.prompt';

export class SettingsPrefixFormatPrompt extends AbstractPrompt {
	async prompt(): Promise<void> {
		const settings = SettingsRepository.get();

		const settingsPrefixFormatQuestion = new SelectQuestion(
			'prefixFormat',
			MESSAGE.SETTINGS_UPDATE_PREFIX_FORMAT_QUESTION,
			[
				PrefixFormat.NONE,
				`${EMOJIS.ZAP} ️[{${PrefixFormat.INDEX}}]:`,
				`${EMOJIS.ZAP} [{${PrefixFormat.PID}}]:`,
				`${EMOJIS.ZAP} [{${PrefixFormat.NAME}}]:`,
				`${EMOJIS.ZAP} [{${PrefixFormat.TIME}}]:`,
				`${EMOJIS.ZAP} [{${PrefixFormat.COMMAND}}]:`,
				PrefixFormat.CUSTOM,
			],
			{ default: settings.prefixFormat },
		);

		let prefixFormat = (await inquirer.prompt<{ prefixFormat: Settings['prefixFormat']; }>([
			settingsPrefixFormatQuestion.ask(),
		])).prefixFormat;

		if (prefixFormat === PrefixFormat.CUSTOM) {
			const settingsCustomPrefixFormatQuestion = new InputQuestion(
				'prefixFormat',
				MESSAGE.SETTINGS_UPDATE_CUSTOM_PREFIX_FORMAT_QUESTION,
				{ validator: SettingsPrefixFormatValidator.validate },
			);

			prefixFormat = (await inquirer.prompt<{ prefixFormat: Settings['prefixFormat']; }>([
				settingsCustomPrefixFormatQuestion.ask(),
			])).prefixFormat;
		}

		settings.setPrefixFormat(prefixFormat);

		SettingsRepository.update(settings);
	}
}
