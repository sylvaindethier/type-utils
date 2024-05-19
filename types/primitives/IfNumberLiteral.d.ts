import type { IfNotNumber } from "./index";

/**
 * Test a `number` to be literal
 * @typeParam V - The `number` to test against `number` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNumberLiteral<V extends number, Then = true, Else = false> = IfNotNumber<
  V,
  Else,
  number extends V ? Else : Then
>;

/**
 * Test a `number` to not be literal
 * @typeParam V - The `number` to test against not `number` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNumberLiteral_Not<V extends number, Then = true, Else = false> = IfNumberLiteral<
  V,
  Else,
  Then
>;

/**
 * {@link IfNumberLiteral_Not}
 */
export type { IfNumberLiteral_Not as IfNotNumberLiteral };
