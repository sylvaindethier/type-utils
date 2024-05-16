import type { PRODUCT, NOT } from "../operators";

/**
 * Logical INH operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam E - The type to return in case any of the boolean is not literal
 */
export type INH<X extends boolean, Y extends boolean, E = never> = PRODUCT<X, NOT<Y>, E>;
