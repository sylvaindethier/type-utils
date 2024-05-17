import type { PRODUCT, NOT } from "../operators";

/**
 * Logical INH operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type INH<X extends boolean, Y extends boolean, Error = never> = PRODUCT<X, NOT<Y>, Error>;
