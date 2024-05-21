export type * from "./IfNumberLiteral";
import type { IfNotAnyOrNever } from "./";

/**
 * Test a type against `number`
 * @typeParam T - The type to test against `number`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNumber<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends number ? Then : Else,
  Else
>;

/**
 * Test a type against not `number`
 * @typeParam T - The type to test against not `number`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNumber_Not<T, Then = true, Else = false> = IfNumber<T, Else, Then>;

/**
 * {@link IfNumber_Not}
 */
export type { IfNumber_Not as IfNotNumber };
