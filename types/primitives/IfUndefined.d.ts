import type { IfNotAnyOrNever } from "./IfAnyOrNever";

/**
 * Test a type against `undefined`
 * @typeParam T - The type to be tested against `undefined`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfUndefined<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends undefined ? Then : Else,
  Else
>;
