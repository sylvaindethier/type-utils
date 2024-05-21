import type { IfNotAnyOrNever } from "./";

/**
 * Test a type against `null`
 * @typeParam T - The type to test against `null`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNull<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends null ? Then : Else,
  Else
>;

/**
 * Test a type against not `null`
 * @typeParam T - The type to test against not `null`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNull_Not<T, Then = true, Else = false> = IfNull<T, Else, Then>;

/**
 * {@link IfNull_Not}
 */
export type { IfNull_Not as IfNotNull };
