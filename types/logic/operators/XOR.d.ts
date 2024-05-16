import type { PRODUCT, SUM, NOT } from "../operators";

/**
 * Logical XOR operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam E - The type to return in case any of the boolean is not literal
 */
export type XOR<X extends boolean, Y extends boolean, E = never> = PRODUCT<
  SUM<X, Y>,
  NOT<PRODUCT<X, Y>>,
  E
>;
