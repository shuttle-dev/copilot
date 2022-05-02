import { Router } from '../../router/router';

const debug = process.env.DEBUG || false;

export function clear() {
	if (debug) {
		const router = Router.getInstance();
		console.log('\n┌───── debug console ────────────────────');
		console.log(`│ current route: ${router.route}`);
		console.log('└─────\n');
	}
	if (debug) return;
	console.clear();
}
