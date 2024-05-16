import type { SUM, NOT } from "../operators";

/**
 * Logical IMP operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam E - The type to return in case any of the boolean is not literal
 */
export type IMP<X extends boolean, Y extends boolean, E = never> = SUM<NOT<X>, Y, E>;
