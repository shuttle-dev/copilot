import chalk from 'chalk';

import { EMOJIS } from './emoji';

const MORNING_TIME_UNTIL = 12;
const EVENING_TIME_UNTIL = 18;

export function getDayTime() {
	return new Date().getHours();
}

export function getDayTimeGreeting() {
	return getDayTime() < MORNING_TIME_UNTIL ? chalk.yellow('Good morning') : getDayTime() < EVENING_TIME_UNTIL ? chalk.blue('Good day') : chalk.magenta('Good evening');
}

export function getDayTimeEmoji() {
	return getDayTime() < MORNING_TIME_UNTIL ? EMOJIS.COFFEE : getDayTime() < EVENING_TIME_UNTIL ? `${EMOJIS.SUNNY} ` : EMOJIS.STAR;
}
