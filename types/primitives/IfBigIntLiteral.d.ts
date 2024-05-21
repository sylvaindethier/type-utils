import type { IfNotBigInt } from "./";

/**
 * Test a `bigint` to be literal
 * @typeParam V - The `bigint` to test against `bigint` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBigIntLiteral<V extends bigint, Then = true, Else = false> = IfNotBigInt<
  V,
  Else,
  bigint extends V ? Else : Then
>;

/**
 * Test a `bigint` to not be literal
 * @typeParam V - The `bigint` to test against not `bigint` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBigIntLiteral_Not<V extends bigint, Then = true, Else = false> = IfBigIntLiteral<
  V,
  Else,
  Then
>;

/**
 * {@link IfBigIntLiteral_Not}
 */
export type { IfBigIntLiteral_Not as IfNotBigIntLiteral };
