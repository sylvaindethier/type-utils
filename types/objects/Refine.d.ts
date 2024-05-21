/**
 * Refine a base type with constraints to its shape.
 * Works like subsequent interface declaration for type.
 * @typeParam Base - The base type to be refined
 * @typeParam Over - Some partial properties of Base
 * @example
 * ```ts
 * type Refined = Refine<{ foo: string, bar: unknown[] }, { foo: `${number}` }>
 * //   ^? { foo: `${number}`, bar: unknown[] }
 * ```
 */
export type Refine<Base, Over extends Partial<Base>> = {
  [k in keyof Base]: Base[k] & Over[k];
};
