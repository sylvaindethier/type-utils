import type { NOT, AND } from "./";

/**
 * Logical NAND operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type NAND<X extends boolean, Y extends boolean, Error = never> = NOT<AND<X, Y>, Error>;
