import { Command } from '../../../model/command.model';
import { CommandDeletePrompt } from '../../../prompt/prompt/command/command.delete.prompt';
import { Router, RouterParams } from '../../router';

export async function commandDeleteRoute(params: RouterParams<Command['id']>, router: Router) {
	const commandDeletePrompt = new CommandDeletePrompt();
	const commandDeletePromptResult = await commandDeletePrompt.prompt(params.id);

	if (commandDeletePromptResult.confirm) {
		return router.navigate(`/environment/${commandDeletePromptResult.environmentId}`);
	}

	router.navigate(`/command/${params.id}`);
}
