import { Command } from '../../../model/command.model';
import { CommandNamePrompt } from '../../../prompt/prompt/command/command.name.prompt';
import { Router, RouterParams } from '../../router';

export async function commandNameRoute(params: RouterParams<Command['id']>, router: Router) {
	const commandNamePrompt = new CommandNamePrompt();
	await commandNamePrompt.prompt(params.id);

	router.navigate(`/command/${params.id}`);
}
