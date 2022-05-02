import { MenuPrompt } from '../../prompt/prompt/menu.prompt';
import { Router } from '../router';

export async function menuRoute(params: unknown, router: Router) {
	const menuPrompt = new MenuPrompt();
	const menuPromptAnswer = await menuPrompt.prompt();

	router.navigate(menuPromptAnswer);
}
