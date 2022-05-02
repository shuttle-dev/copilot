import { Command } from '../../../model/command.model';
import { CommandDirectoryPrompt } from '../../../prompt/prompt/command/command.directory.prompt';
import { Router, RouterParams } from '../../router';

export async function commandDirectoryRoute(params: RouterParams<Command['id']>, router: Router) {
	const commandDirectoryPrompt = new CommandDirectoryPrompt();
	await commandDirectoryPrompt.prompt(params.id);

	router.navigate(`/command/${params.id}`);
}
