import type { If } from "../If";

/**
 * Logical AND operator
 * @typeParam X - The X boolean to perform the conjunction
 * @typeParam Y - The Y boolean to perform the conjunction
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type AND<X extends boolean, Y extends boolean, Error = never> = If<
  // X is `true`
  X,
  // result is `true` only if Y is `true`
  If<Y>,
  // otherwise is `false`
  false,
  Error
>;

/**
 * Logical PRODUCT (= AND) operator
 * {@link AND}
 * @typeParam X - The X boolean to perform the conjunction
 * @typeParam Y - The Y boolean to perform the conjunction
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type PRODUCT<X extends boolean, Y extends boolean, Error = never> = AND<X, Y, Error>;
