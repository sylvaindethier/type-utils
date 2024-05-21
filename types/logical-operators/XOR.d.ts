import type { PRODUCT, SUM, NOT } from "./";

/**
 * Logical XOR operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type XOR<X extends boolean, Y extends boolean, Error = never> = PRODUCT<
  SUM<X, Y>,
  NOT<PRODUCT<X, Y>>,
  Error
>;
