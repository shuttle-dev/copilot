import { Command } from '../../../model/command.model';
import { CommandMenuPrompt } from '../../../prompt/prompt/command/command.menu.prompt';
import { Router, RouterParams } from '../../router';

export async function commandMenuRoute(params: RouterParams<Command['id']>, router: Router) {
	const commandMenuPrompt = new CommandMenuPrompt();
	const commandMenuPromptResult = await commandMenuPrompt.prompt(params.id);

	router.navigate(commandMenuPromptResult.menu);
}
