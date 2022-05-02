/* eslint-disable */
/**
 * Workaround for https://github.com/microsoft/TypeScript/issues/43329
 */
export async function importEsm<R>(path: string): Promise<R> {
	return await Function('return import("' + path + '")')() as R;
}
