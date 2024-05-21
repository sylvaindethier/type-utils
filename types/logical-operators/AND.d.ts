import type { If } from "./";

/**
 * Logical AND operator
 * @typeParam X - The X boolean to perform the conjunction
 * @typeParam Y - The Y boolean to perform the conjunction
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type AND<X extends boolean, Y extends boolean, Error = never> = If<
  X,
  // X is `true`, resolve to `true` only when Y is `true`
  If<Y, true, false, Error>,
  // X is `false`, resolve to `false`
  If<Y, false, false, Error>,
  Error
>;
