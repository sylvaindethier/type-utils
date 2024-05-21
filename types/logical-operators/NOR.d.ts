import type { NOT, OR } from "./";

/**
 * Logical NOR operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type NOR<X extends boolean, Y extends boolean, Error = never> = NOT<OR<X, Y>, Error>;
