import type { IfNotAnyOrNever } from "./";

/**
 * Test a type against `undefined`
 * @typeParam T - The type to test against `undefined`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfUndefined<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends undefined ? Then : Else,
  Else
>;

/**
 * Test a type against not `undefined`
 * @typeParam T - The type to test against not `undefined`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfUndefined_Not<T, Then = true, Else = false> = IfUndefined<T, Else, Then>;

/**
 * {@link IfUndefined_Not}
 */
export type { IfUndefined_Not as IfNotUndefined };
