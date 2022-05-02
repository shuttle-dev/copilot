import { src, task } from 'gulp';
import clean from 'gulp-clean';

const sources = ['action', 'bin', 'command', 'global', 'lib', 'model', 'prompt', 'router', 'gulp', 'test'];

function cleanOutput() {
	const files = sources.map((source) => [
		`${source}/**/*.js`,
		`${source}/**/*.spec.js`,
		`${source}/**/*.js.map`,
		`${source}/**/*.spec.js.map`,
	]);
	return src(
		files.reduce((a, b) => a.concat(b), []),
		{
			read: false,
		},
	).pipe(clean());
}

task('clean:build', cleanOutput);
