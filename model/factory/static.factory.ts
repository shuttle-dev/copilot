import { plainToInstance } from 'class-transformer';

export type Constructor<T> = abstract new (...args: any) => T;

export type PartialInstanceType<T extends Constructor<any>> = Partial<InstanceType<T>>;

export function createInstance<T extends Constructor<any>, D extends PartialInstanceType<T> = PartialInstanceType<T>>(Class: T, data: D): InstanceType<T> {
	return plainToInstance(Class as any, data, {
		exposeDefaultValues: true,
	});
}
export abstract class StaticFactory {
	static create<T extends typeof StaticFactory, D extends PartialInstanceType<T> = PartialInstanceType<T>>(this: T, data: D): InstanceType<T> {
		return createInstance(this, data);
	}
}
