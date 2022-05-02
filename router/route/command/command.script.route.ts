import { Command } from '../../../model/command.model';
import { CommandScriptPrompt } from '../../../prompt/prompt/command/command.script.prompt';
import { Router, RouterParams } from '../../router';

export async function commandScriptRoute(params: RouterParams<Command['id']>, router: Router) {
	const commandScriptPrompt = new CommandScriptPrompt();
	await commandScriptPrompt.prompt(params.id);

	router.navigate(`/command/${params.id}`);
}
