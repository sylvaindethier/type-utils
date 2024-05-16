import type { IfAny } from "./IfAny";

/**
 * Test a type again `unknown`
 * @typeParam T - The type to test against `unknown`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfUnknown<T, Then = true, Else = false> = IfAny<
  T,
  Else,
  unknown extends T ? Then : Else
>;
