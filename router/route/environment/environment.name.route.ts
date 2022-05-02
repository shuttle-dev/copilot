import { Environment } from '../../../model/environment.model';
import { EnvironmentNamePrompt } from '../../../prompt/prompt/environment/environment.name.prompt';
import { Router, RouterParams } from '../../router';

export async function environmentNameRoute(params: RouterParams<Environment['id']>, router: Router) {
	const environmentNamePrompt = new EnvironmentNamePrompt();
	await environmentNamePrompt.prompt(params.id);

	router.navigate(`/environment/${params.id}`);
}
