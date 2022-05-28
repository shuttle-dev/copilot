import { commandCreateRoute } from './route/command/command.create.route';
import { commandDeleteRoute } from './route/command/command.delete.route';
import { commandDirectoryRoute } from './route/command/command.directory.route';
import { commandEnvironmentVariablesRoute } from './route/command/command.environment-variables.route';
import { commandExecutorRoute } from './route/command/command.executor.route';
import { commandListRoute } from './route/command/command.list.route';
import { commandMenuRoute } from './route/command/command.menu.route';
import { commandNameRoute } from './route/command/command.name.route';
import { commandPrefixColorRoute } from './route/command/command.prefix-color.route';
import { commandScriptRoute } from './route/command/command.script.route';
import { environmentCreateRoute } from './route/environment/environment.create.route';
import { environmentDeleteRoute } from './route/environment/environment.delete.route';
import { environmentExecutorRoute } from './route/environment/environment.executor.route';
import { environmentListRoute } from './route/environment/environment.list.route';
import { environmentMenuRoute } from './route/environment/environment.menu.route';
import { environmentNameRoute } from './route/environment/environment.name.route';
import { menuRoute } from './route/menu.route';
import { settingsExecutorRoute } from './route/settings/settings.executor.route';
import { settingsMenuRoute } from './route/settings/settings.menu.route';
import { settingsPrefixFormatRoute } from './route/settings/settings.prefix-format.route';
import { Router } from './router';

export async function menuRouter() {
	const router = Router.getInstance();

	router.register('/', menuRoute);
	router.register('/environment/create', environmentCreateRoute);
	router.register('/environment/list', environmentListRoute);
	router.register<'id'>('/environment/:id', environmentMenuRoute);
	router.register<'id'>('/environment/:id/name', environmentNameRoute);
	router.register<'id'>('/environment/:id/executor', environmentExecutorRoute);
	router.register<'id'>('/environment/:id/delete', environmentDeleteRoute);
	router.register<'id'>('/environment/:id/command/create', commandCreateRoute);
	router.register<'id'>('/environment/:id/command/list', commandListRoute);
	router.register<'id'>('/command/:id', commandMenuRoute);
	router.register<'id'>('/command/:id/name', commandNameRoute);
	router.register<'id'>('/command/:id/script', commandScriptRoute);
	router.register<'id'>('/command/:id/environment-variables', commandEnvironmentVariablesRoute);
	router.register<'id'>('/command/:id/prefix-color', commandPrefixColorRoute);
	router.register<'id'>('/command/:id/executor', commandExecutorRoute);
	router.register<'id'>('/command/:id/directory', commandDirectoryRoute);
	router.register<'id'>('/command/:id/delete', commandDeleteRoute);
	router.register('/settings', settingsMenuRoute);
	router.register('/settings/executor', settingsExecutorRoute);
	router.register<'id'>('/settings/prefix-format', settingsPrefixFormatRoute);

	await router.init();
}
