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
 * Test a `boolean` to be literal, whether `true` or `false`
 * @typeParam V - The boolean to test against `boolean` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBooleanLiteral<V extends boolean, Then = true, Else = false> = IfBoolean<
  V,
  boolean extends V ? Else : Then,
  Else
>;
