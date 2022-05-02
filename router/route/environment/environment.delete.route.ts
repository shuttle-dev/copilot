import { Environment } from '../../../model/environment.model';
import { EnvironmentDeletePrompt } from '../../../prompt/prompt/environment/environment.delete.prompt';
import { Router, RouterParams } from '../../router';

export async function environmentDeleteRoute(params: RouterParams<Environment['id']>, router: Router) {
	const environmentDeletePrompt = new EnvironmentDeletePrompt();
	const environmentDeletePromptResult = await environmentDeletePrompt.prompt(params.id);

	if (environmentDeletePromptResult.confirm) {
		return router.navigate('/environment/list');
	}

	router.navigate(`/environment/${environmentDeletePromptResult.id}`);
}
