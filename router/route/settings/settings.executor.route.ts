import { SettingsExecutorPrompt } from '../../../prompt/prompt/settings/settings.executor.prompt';
import { Router } from '../../router';

export async function settingsExecutorRoute(_: unknown, router: Router) {
	const settingsExecutorPrompt = new SettingsExecutorPrompt();
	await settingsExecutorPrompt.prompt();

	router.navigate('/settings');
}
