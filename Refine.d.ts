/**
 * Refine a Type with constraint from base type
 * Works like subsequent interface declaration for type.
 * @typeParam T - The type to be refined
 * @typeParam P - Some partial properties of T
 * @example
 * ```ts
 * type Refined = Refine<{ foo: string, bar: unknown[] }, { foo: `${number}` }>
 * //   ^? { foo: `${number}`, bar: unknown[] }
 * ```
 */
export type Refine<T, P extends Partial<T>> = {
  [k in keyof T]: T[k] & P[k];
};
