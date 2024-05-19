export type * from "./IfStringLiteral";
import type { IfNotAnyOrNever } from "./IfAnyOrNever";

/**
 * Test a type against `string`
 * @typeParam T - The type to test against `string`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfString<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends string ? Then : Else,
  Else
>;

/**
 * Test a type against not `string`
 * @typeParam T - The type to test against not `string`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfString_Not<T, Then = true, Else = false> = IfString<T, Else, Then>;

/**
 * {@link IfString_Not}
 */
export type { IfString_Not as IfNotString };
