import type { If } from "../If";

/**
 * Logical NOT operator
 * @typeParam X - The boolean to perform the negation on
 * @typeParam Error - The type to return in case the boolean is not literal
 */
export type NOT<X extends boolean, Error = never> = If<X, false, true, Error>;
