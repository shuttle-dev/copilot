import { Command } from '../../../model/command.model';
import { CommandEnvironmentVariablesPrompt } from '../../../prompt/prompt/command/command.environment-variables.prompt';
import { Router, RouterParams } from '../../router';

export async function commandEnvironmentVariablesRoute(params: RouterParams<Command['id']>, router: Router) {
	const commandEnvironmentVariablesPrompt = new CommandEnvironmentVariablesPrompt();
	await commandEnvironmentVariablesPrompt.prompt(params.id);

	router.navigate(`/command/${params.id}`);
}
