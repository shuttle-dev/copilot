import { Command } from '../../../model/command.model';
import { CommandExecutorPrompt } from '../../../prompt/prompt/command/command.executor.prompt';
import { Router, RouterParams } from '../../router';

export async function commandExecutorRoute(params: RouterParams<Command['id']>, router: Router) {
	const commandExecutorPrompt = new CommandExecutorPrompt();
	await commandExecutorPrompt.prompt(params.id);

	router.navigate(`/command/${params.id}`);
}
