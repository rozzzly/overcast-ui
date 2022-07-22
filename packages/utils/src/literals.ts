
export type Key = (
    | number
    | string
    | symbol
);

/**
 * @see https://github.com/Microsoft/TypeScript/issues/28046
 */
 export const literalsToList = <T extends Key>(...args: T[]): T[] => (args);
 export const literalsToEnum = <T extends Key>(...args: T[]): {
     [K in T]: K;
 } => (args.reduce((reduction, lit) => ({
     /* eslint-disable */
     ...reduction,
     [lit]: lit
 }), {}) as {
         /* eslint-enable indent */
         [K in T]: K;
     });

 export type LiteralsToUnion<T> = (
     (T extends ReadonlyArray<infer Literal>
         ? Literal
         : (T extends {}
             ? keyof T
             : never
         )
     )
 );
