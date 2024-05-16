import type { IfNotAnyOrNever } from "./IfAnyOrNever";

/**
 * Test a type against `number`
 * @typeParam T - The type to be tested against `number`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNumber<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends number ? Then : Else,
  Else
>;

/**
 * Test a `number` to be literal
 * @typeParam V - The number to be tested against `number` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNumberLiteral<V extends number, Then = true, Else = false> = IfNumber<
  V,
  number extends V ? Else : Then,
  Else
>;
