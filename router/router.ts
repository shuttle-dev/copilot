export type RouterParams<T extends string> = Record<T, string>;

export class RouteNotFoundException extends Error {
	constructor(message: string) {
		super(message);

		Object.setPrototypeOf(this, RouteNotFoundException.prototype);
	}
}

export class RouteParamsNotFoundException extends Error {
	constructor(message: string) {
		super(message);

		Object.setPrototypeOf(this, RouteParamsNotFoundException.prototype);
	}
}

export class RouteHandlerNotFoundException extends Error {
	constructor(message: string) {
		super(message);

		Object.setPrototypeOf(this, RouteHandlerNotFoundException.prototype);
	}
}

export class Router {
	static instance: Router;

	#route: string = '/';

	#routes = new Map<string, (params: Record<string, string>, router: Router) => Promise<void>>();

	private constructor() {
		// no-op
	}

	public static getInstance(): Router {
		if (!Router.instance) {
			Router.instance = new Router();
		}

		return Router.instance;
	}

	async init() {
		do {
			let params: Record<string, string> | undefined;

			const route = [...this.routes.keys()].find((r) => {
				params = this.matchRoute(r);
				return !!params;
			});

			if (!route) {
				throw new RouteNotFoundException(`Route not found: ${this.route}`);
			}

			if (!params) {
				throw new RouteParamsNotFoundException(`Params not found for route: ${this.route}`);
			}

			const handler = this.routes.get(route);

			if (!handler) {
				throw new RouteHandlerNotFoundException(`Handler not found for route: ${this.route}`);
			}

			await handler(params, this);
		} while (this.route);
	}

	navigate(route: string) {
		this.#route = route;
	}

	get route() {
		return this.#route;
	}

	get routes() {
		return this.#routes;
	}

	register<T extends string = string>(route: string, callback: (params: Record<T, string>, router: Router) => Promise<void>) {
		this.routes.set(route, callback);
	}

	private matchRoute(route: string): Record<string, string> | undefined {
		const params = [...route.matchAll(/:([^\s/]+)/g)].map((param) => param[1]);
		const regexp = new RegExp(`^${route.replace(/:[^\s/]+/g, '([\\w-]+)')}$`);
		const matches = this.route.match(regexp);

		if (!matches) return undefined;

		return Object.fromEntries(params.map((_, i) => [params?.[i], matches?.slice?.(1)?.[i]])) as Record<string, string>;
	}
}
