export type Newable<T> = new (...args: any[]) => T;
export type ClassFields<T, D extends T = T> = { [key in keyof T]?: D[key] };

export * from './city';
export * from './config'
export * from './user';
