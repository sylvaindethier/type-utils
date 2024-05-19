import type { IfNotBoolean } from "./index";

/**
 * Test a `boolean` to be literal
 * @typeParam V - The `boolean` to test against `boolean` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBooleanLiteral<V extends boolean, Then = true, Else = false> = IfNotBoolean<
  V,
  Else,
  boolean extends V ? Else : Then
>;

/**
 * Test a `boolean` to not be literal
 * @typeParam V - The `boolean` to test against not `boolean` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBooleanLiteral_Not<V extends boolean, Then = true, Else = false> = IfBooleanLiteral<
  V,
  Else,
  Then
>;

/**
 * {@link IfBooleanLiteral_Not}
 */
export type { IfBooleanLiteral_Not as IfNotBooleanLiteral };
