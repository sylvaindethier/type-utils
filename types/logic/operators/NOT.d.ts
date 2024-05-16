import type { If } from "../If";

/**
 * Logical NOT operator
 * @typeParam X - The boolean to perform the negation on
 * @typeParam E - The type to return in case the boolean is not literal
 */
export type NOT<X extends boolean, E = never> = If<X, false, true, E>;
