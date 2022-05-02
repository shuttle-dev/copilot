import { Environment } from '../../../model/environment.model';
import { EnvironmentMenuPrompt } from '../../../prompt/prompt/environment/environment.menu.prompt';
import { Router, RouterParams } from '../../router';

export async function environmentMenuRoute(params: RouterParams<Environment['id']>, router: Router) {
	const environmentMenuPrompt = new EnvironmentMenuPrompt();
	const environmentMenuPromptResult = await environmentMenuPrompt.prompt(params.id);

	router.navigate(environmentMenuPromptResult.menu);
}
