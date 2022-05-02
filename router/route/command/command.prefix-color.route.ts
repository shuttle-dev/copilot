import { Command } from '../../../model/command.model';
import { CommandPrefixColorPrompt } from '../../../prompt/prompt/command/command.prefix-color.prompt';
import { Router, RouterParams } from '../../router';

export async function commandPrefixColorRoute(params: RouterParams<Command['id']>, router: Router) {
	const commandPrefixColorPrompt = new CommandPrefixColorPrompt();
	await commandPrefixColorPrompt.prompt(params.id);

	router.navigate(`/command/${params.id}`);
}
