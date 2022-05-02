import { SettingsMenuPrompt } from '../../../prompt/prompt/settings/settings.menu.prompt';
import { Router } from '../../router';

export async function settingsMenuRoute(_: unknown, router: Router) {
	const settingsMenuPrompt = new SettingsMenuPrompt();
	const settingsMenuPromptResult = await settingsMenuPrompt.prompt();

	router.navigate(settingsMenuPromptResult.menu);
}
