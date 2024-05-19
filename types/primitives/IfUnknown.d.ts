import type { IfNotAny } from "./index";

/**
 * Test a type again `unknown`
 * @typeParam T - The type to test against `unknown`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfUnknown<T, Then = true, Else = false> = IfNotAny<
  T,
  unknown extends T ? Then : Else,
  Else
>;

/**
 * Test a type against not `unknown`
 * @typeParam T - The type to test against not `unknown`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfUnknown_Not<T, Then = true, Else = false> = IfUnknown<T, Else, Then>;

/**
 * {@link IfUnknown_Not}
 */
export type { IfUnknown_Not as IfNotUnknown };
