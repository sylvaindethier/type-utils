import type { IfNotString } from "./";

/**
 * Test a `string` to be literal
 * @typeParam V - The `string` to test against `string` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfStringLiteral<V extends string, Then = true, Else = false> = IfNotString<
  V,
  Else,
  string extends V ? Else : Then
>;

/**
 * Test a `string` to not be literal
 * @typeParam V - The `string` to test against not `string` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfStringLiteral_Not<V extends string, Then = true, Else = false> = IfStringLiteral<
  V,
  Else,
  Then
>;

/**
 * {@link IfStringLiteral_Not}
 */
export { IfStringLiteral_Not as IfNotStringLiteral };
