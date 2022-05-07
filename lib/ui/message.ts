/* eslint-disable max-len */
import chalk from 'chalk';

import { Command } from '../../model/command.model';
import { Environment } from '../../model/environment.model';
import { Settings } from '../../model/settings.model';
import { getDayTimeEmoji, getDayTimeGreeting } from './date';
import { EMOJIS } from './emoji';

const MESSAGE = {
	MENU_QUESTION: `${getDayTimeGreeting()} ${getDayTimeEmoji()} What can I do for you today?`,
	MENU_CREATE_ENVIRONMENT_QUESTION: `${chalk.dim('I can')} ${chalk.underline('create a new environment')}`,
	MENU_UPDATE_ENVIRONMENT_QUESTION: `${chalk.dim('I can')} ${chalk.underline('update an existing environment')}`,
	MENU_SETTINGS_QUESTION: `${chalk.dim('I can')} ${chalk.underline('change the settings')}`,
	MENU_QUIT_QUESTION: `${EMOJIS.WAVE} ${chalk.dim('When you\'re done, I can')} ${chalk.underline('close myself')}`,
	MENU_BACK_QUESTION: `${EMOJIS.POINT_LEFT} ${chalk.dim('When you\'re done, I can')} ${chalk.underline('take you back')}`,
	ENVIRONMENT_LIST_QUESTION: 'Which environment should I work on for you?',
	ENVIRONMENT_MENU_QUESTION: (name: Environment['name']) => `Let's update the » ${name} « environment. What should I do next?`,
	ENVIRONMENT_MENU_NAME_QUESTION: (name: Environment['name']) => `${chalk.dim('I can')} ${chalk.underline('rename the environment')} ${chalk.dim(`(${name})`)}`,
	ENVIRONMENT_MENU_COMMAND_CREATE_QUESTION: `${chalk.dim('I can')} ${chalk.underline('create a command')}`,
	ENVIRONMENT_MENU_COMMAND_LIST_QUESTION: `${chalk.dim('I can')} ${chalk.underline('list existing commands')}`,
	ENVIRONMENT_MENU_EXECUTOR_QUESTION: (executor: Environment['executor']) => `${chalk.dim('I can')} ${chalk.underline('change the default executor')} ${chalk.dim(`(${executor})`)}`,
	ENVIRONMENT_MENU_DELETE_QUESTION: `${chalk.dim('I can')} ${chalk.underline('delete the environment')} ${chalk.red('(Danger zone)')}`,
	ENVIRONMENT_CREATE_NAME_QUESTION: 'How should I name the environment?',
	ENVIRONMENT_CREATE_EXECUTOR_QUESTION: 'Which executor should I use as default?',
	ENVIRONMENT_UPDATE_NAME_QUESTION: 'How should I name the environment?',
	ENVIRONMENT_UPDATE_EXECUTOR_QUESTION: 'Which executor should I use as default?',
	ENVIRONMENT_UPDATE_DELETE_QUESTION: (name: Environment['name']) => chalk.red(`${EMOJIS.WARNING}  Are you sure that I should delete the » ${name} « environment?`),
	ENVIRONMENT_NAME_EXISTS_VALIDATION: (name: Environment['name']) => chalk.red(`${EMOJIS.WARNING}  Pardon! The environment » ${name} « already exists.`),
	ENVIRONMENT_NAME_NOT_EMPTY_VALIDATION: chalk.red(`${EMOJIS.WARNING}  Pardon! The environment name cannot be empty.`),
	COMMAND_LIST_QUESTION: 'Which command should I work on for you?',
	COMMAND_MENU_QUESTION: (name: Command['name']) => `Let's update the » ${name} « command. What should I do next?`,
	COMMAND_MENU_NAME_QUESTION: (name: Command['name']) => `${chalk.dim('I can')} ${chalk.underline('rename the command')} ${chalk.dim(`(${name})`)}`,
	COMMAND_MENU_SCRIPT_QUESTION: (script: Command['script']) => `${chalk.dim('I can')} ${chalk.underline('change the script')} ${chalk.dim(`(${script})`)}`,
	COMMAND_MENU_PREFIX_COLOR_QUESTION: (prefixColor: Command['prefixColor']) => `${chalk.dim('I can')} ${chalk.underline('change the prefix color')} ${chalk.dim(`(${prefixColor})`)}`,
	COMMAND_MENU_EXECUTOR_QUESTION: (executor: Command['executor']) => `${chalk.dim('I can')} ${chalk.underline('change the executor')} ${chalk.dim(`(${executor})`)}`,
	COMMAND_MENU_DIRECTORY_QUESTION: (directory: Command['directory']) => `${chalk.dim('I can')} ${chalk.underline('change the working directory')} ${chalk.dim(`(${directory})`)}`,
	COMMAND_MENU_DELETE_QUESTION: `${chalk.dim('I can')} ${chalk.underline('delete the command')} ${chalk.red('(Danger Zone)')}`,
	COMMAND_CREATE_NAME_QUESTION: 'How should I name the command?',
	COMMAND_CREATE_SCRIPT_QUESTION: 'Which script should I execute?',
	COMMAND_CREATE_PREFIX_COLOR_QUESTION: 'Which prefix color should I use?',
	COMMAND_CREATE_EXECUTOR_QUESTION: 'Which executor should I use?',
	COMMAND_CREATE_DIRECTORY_QUESTION: 'Which working directory should I use? [press tab for autocomplete]',
	COMMAND_UPDATE_NAME_QUESTION: 'How should I name the command?',
	COMMAND_UPDATE_SCRIPT_QUESTION: 'Which script should I execute?',
	COMMAND_UPDATE_PREFIX_COLOR_QUESTION: 'Which prefix color should I use?',
	COMMAND_UPDATE_EXECUTOR_QUESTION: 'Which executor should I use?',
	COMMAND_UPDATE_DIRECTORY_QUESTION: 'Which working directory should I use? [press tab for autocomplete]',
	COMMAND_UPDATE_DELETE_QUESTION: (name: Command['name']) => chalk.red(`${EMOJIS.WARNING}  Are you sure that I should delete the » ${name} « command?`),
	COMMAND_NAME_NOT_EMPTY_VALIDATION: chalk.red(`${EMOJIS.WARNING}  Pardon! The command name cannot be empty.`),
	COMMAND_SCRIPT_NOT_EMPTY_VALIDATION: chalk.red(`${EMOJIS.WARNING}  Pardon! The command script cannot be empty.`),
	COMMAND_DIRECTORY_NOT_EMPTY_VALIDATION: chalk.red(`${EMOJIS.WARNING}  Pardon! The command directory cannot be empty.`),
	SETTINGS_MENU_QUESTION: 'Let\'s update the settings. What should I do next?',
	SETTINGS_MENU_EXECUTOR_QUESTION: (executor: Settings['executor']) => `${chalk.dim('I can')} ${chalk.underline('change the executor')} ${chalk.dim(`(${executor})`)}`,
	SETTINGS_MENU_PREFIX_FORMAT_QUESTION: (prefixFormat: Settings['prefixFormat']) => `${chalk.dim('I can')} ${chalk.underline('change the prefix format')} ${chalk.dim(`(${prefixFormat})`)}`,
	SETTINGS_UPDATE_EXECUTOR_QUESTION: 'Which executor should I use?',
	SETTINGS_UPDATE_PREFIX_FORMAT_QUESTION: 'Which prefix format should I use?',
	SETTINGS_UPDATE_CUSTOM_PREFIX_FORMAT_QUESTION: 'Which custom prefix format should I use?',
	SETTINGS_UPDATE_PREFIX_FORMAT_NOT_EMPTY_VALIDATION: chalk.red(`${EMOJIS.WARNING}  Pardon! The prefix format cannot be empty.`),
};

export default MESSAGE;
