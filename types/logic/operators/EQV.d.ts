import type { NOT, XOR } from "./index";

/**
 * Logical NOT_XOR operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type NOT_XOR<X extends boolean, Y extends boolean, Error = never> = NOT<XOR<X, Y>, Error>;

/**
 * {@link NOT_XOR}
 */
export type { NOT_XOR as EQV };

/**
 * {@link NOT_XOR}
 */
export type { NOT_XOR as XNOR };
