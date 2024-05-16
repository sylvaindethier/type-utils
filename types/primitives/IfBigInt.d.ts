import type { IfNotAnyOrNever } from "./IfAnyOrNever";

/**
 * Test a type against `bigint`
 * @typeParam T - The type to be tested against `bigint`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBigInt<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends bigint ? Then : Else,
  Else
>;

/**
 * Test a `bigint` to be literal
 * @typeParam V - The bigint type to be tested against `bigint` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBigIntLiteral<V extends bigint, Then = true, Else = false> = IfBigInt<
  V,
  bigint extends V ? Else : Then,
  Else
>;
