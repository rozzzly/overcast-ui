export const OMITTED: unique symbol = Symbol('OMITTED');
export type OMITTED = typeof OMITTED;


export const dumbAssert: <T>(value: unknown) => asserts value is T = (_value) => { };
export const cast: <T>(value: unknown) => T = value => value as any;