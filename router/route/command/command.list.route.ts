import { Environment } from '../../../model/environment.model';
import { CommandListPrompt } from '../../../prompt/prompt/command/command.list.prompt';
import { Router, RouterParams } from '../../router';

export async function commandListRoute(params: RouterParams<Environment['id']>, router: Router) {
	const commandListPrompt = new CommandListPrompt();
	const commandListPromptResult = await commandListPrompt.prompt(params.id);

	if (!commandListPromptResult.id) {
		return router.navigate(`/environment/${params.id}`);
	}

	router.navigate(`/command/${commandListPromptResult.id}`);
}
