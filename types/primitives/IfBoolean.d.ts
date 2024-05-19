export type * from "./IfBooleanLiteral";
import type { IfNotAnyOrNever } from "./index";

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
 * Test a type against not `boolean`
 * @typeParam T - The type to test against not `boolean`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfBoolean_Not<T, Then = true, Else = false> = IfBoolean<T, Else, Then>;

/**
 * {@link IfBoolean_Not}
 */
export type { IfBoolean_Not as IfNotBoolean };
