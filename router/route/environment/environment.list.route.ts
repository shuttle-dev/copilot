import { EnvironmentListPrompt } from '../../../prompt/prompt/environment/environment.list.prompt';
import { Router } from '../../router';

export async function environmentListRoute(params: unknown, router: Router) {
	const environmentListPrompt = new EnvironmentListPrompt();
	const environmentListPromptResult = await environmentListPrompt.prompt();

	if (!environmentListPromptResult.id) {
		return router.navigate('/');
	}

	router.navigate(`/environment/${environmentListPromptResult.id}`);
}
