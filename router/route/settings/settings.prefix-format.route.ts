import { SettingsPrefixFormatPrompt } from '../../../prompt/prompt/settings/settings.prefix-format.prompt';
import { Router } from '../../router';

export async function settingsPrefixFormatRoute(_: unknown, router: Router) {
	const settingsPrefixFormatPrompt = new SettingsPrefixFormatPrompt();
	await settingsPrefixFormatPrompt.prompt();

	router.navigate('/settings');
}
