import { Environment } from '../../../model/environment.model';
import { CommandCreatePrompt } from '../../../prompt/prompt/command/command.create.prompt';
import { Router, RouterParams } from '../../router';

export async function commandCreateRoute(params: RouterParams<Environment['id']>, router: Router) {
	const commandCreatePrompt = new CommandCreatePrompt();
	await commandCreatePrompt.prompt(params.id);

	router.navigate(`/environment/${params.id}`);
}
