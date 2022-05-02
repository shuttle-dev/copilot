export enum Executor {
	NPM = 'npm',
	YARN = 'yarn',
	DOCKER = 'docker',
	DOCKER_COMPOSE = 'docker-compose',
}

export enum PrefixColor {
	BLACK = 'black',
	RED = 'red',
	GREEN = 'green',
	YELLOW = 'yellow',
	BLUE = 'blue',
	MAGENTA = 'magenta',
	CYAN = 'cyan',
	WHITE = 'white',
	GRAY = 'gray',
}

export enum PrefixFormat {
	NONE = 'none',
	INDEX = 'index',
	PID = 'pid',
	NAME = 'name',
	TIME = 'time',
	COMMAND = 'command',
	CUSTOM = 'custom',
}
