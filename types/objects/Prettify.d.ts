/**
 * Prettify helper
 * @typeParam T - The type to prettify
 * @typeParam Deep - Whether or not to Prettify nested types
 * @see https://www.totaltypescript.com/concepts/the-prettify-helper
 */
export type Prettify<T, Deep extends boolean = false> = {
  [k in keyof T]: Deep extends true ? Prettify<T[k], Deep> : T[k];
} & unknown;
