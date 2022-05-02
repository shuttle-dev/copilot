import { Environment } from '../../../model/environment.model';
import { EnvironmentExecutorPrompt } from '../../../prompt/prompt/environment/environment.executor.prompt';
import { Router, RouterParams } from '../../router';

export async function environmentExecutorRoute(params: RouterParams<Environment['id']>, router: Router) {
	const environmentExecutorPrompt = new EnvironmentExecutorPrompt();
	await environmentExecutorPrompt.prompt(params.id);

	router.navigate(`/environment/${params.id}`);
}
