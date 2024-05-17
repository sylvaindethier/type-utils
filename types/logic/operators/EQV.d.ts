import type { NOT, XOR } from "../operators";

/**
 * Logical NOT_XOR operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type NOT_XOR<X extends boolean, Y extends boolean, Error = never> = NOT<XOR<X, Y>, Error>;

/**
 * Logical XNOR operator
 * {@link NOT_XOR}
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type XNOR<X extends boolean, Y extends boolean, Error = never> = NOT_XOR<X, Y, Error>;

/**
 * Logical EQV operator (= XNOR = NOT_XOR)
 * {@link NOT_XOR}
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam Error - The type to return in case any of the boolean is not literal
 */
export type EQV<X extends boolean, Y extends boolean, Error = never> = NOT_XOR<X, Y, Error>;
