export type * from "./IfBigIntLiteral";
import type { IfNotAnyOrNever } from "./";

/**
 * Test a type against `bigint`
 * @typeParam T - The type to test against `bigint`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBigInt<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends bigint ? Then : Else,
  Else
>;

/**
 * Test a type against not `bigint`
 * @typeParam T - The type to test against not `bigint`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBigInt_Not<T, Then = true, Else = false> = IfBigInt<T, Else, Then>;

/**
 * {@link IfBigInt_Not}
 */
export type { IfBigInt_Not as IfNotBigInt };
