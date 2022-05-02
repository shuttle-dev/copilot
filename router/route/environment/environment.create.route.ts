import { EnvironmentCreatePrompt } from '../../../prompt/prompt/environment/environment.create.prompt';
import { Router } from '../../router';

export async function environmentCreateRoute(params: unknown, router: Router) {
	const environmentCreatePrompt = new EnvironmentCreatePrompt();
	const environmentCreatePromptResult = await environmentCreatePrompt.prompt();

	router.navigate(`/environment/${environmentCreatePromptResult.environment.id}`);
}
