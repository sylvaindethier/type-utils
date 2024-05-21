import type { SUM, NOT } from "./";

/**
 * Logical IMP operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type IMP<X extends boolean, Y extends boolean, Error = never> = SUM<NOT<X>, Y, Error>;
