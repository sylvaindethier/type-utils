import type { If } from "../If";

/**
 * Logical OR operator
 * @typeParam X - The X boolean to perform the disjunction
 * @typeParam Y - The Y boolean to perform the disjunction
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type OR<X extends boolean, Y extends boolean, Error = never> = If<
  // X is `true`
  X,
  // result is `true`
  true,
  // X is `false`
  If<Y>, // Y is `true` result is `true`, `false` otherwise
  Error
>;

/**
 * Logical SUM (= OR) operator
 * {@link OR}
 * @typeParam X - The X boolean to perform the disjunction
 * @typeParam Y - The Y boolean to perform the disjunction
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type SUM<X extends boolean, Y extends boolean, Error = never> = OR<X, Y, Error>;
