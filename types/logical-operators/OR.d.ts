import type { If } from "./";

/**
 * Logical OR operator
 * @typeParam X - The X boolean to perform the disjunction
 * @typeParam Y - The Y boolean to perform the disjunction
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type OR<X extends boolean, Y extends boolean, Error = never> = If<
  X,
  // X is `true`, resolve to `true`
  If<Y, true, true, Error>,
  // X is `false`, resolve to `true` when Y is `true`, `false` when Y is `false`
  If<Y, true, false, Error>,
  Error
>;
