import type { IfNotAnyOrNever } from "./IfAnyOrNever";

/**
 * Test a type against `boolean`
 * @typeParam T - The type to test against `boolean`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBoolean<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends boolean ? Then : Else,
  Else
>;

/**
 * Test a boolean type to be literal, whether `true` or `false`
 * @typeParam B - The boolean type to test against `boolean` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBooleanLiteral<B extends boolean, Then = true, Else = false> = IfBoolean<
  B,
  boolean extends B ? Else : Then,
  Else
>;
