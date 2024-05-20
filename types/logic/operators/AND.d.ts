import type { If } from "../If";

/**
 * Logical AND operator
 * @typeParam X - The X boolean to perform the conjunction
 * @typeParam Y - The Y boolean to perform the conjunction
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type AND<X extends boolean, Y extends boolean, Error = never> = If<
  X,
  // X is `true`, result is `true` only when Y is `true`
  If<Y, true, false, Error>,
  // X is `false`, result is `false`
  If<Y, false, false, Error>,
  Error
>;

/**
 * {@link AND}
 */
export type { AND as PRODUCT };
