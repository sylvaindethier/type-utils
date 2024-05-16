import type { IfNotAnyOrNever } from "./IfAnyOrNever";

/**
 * Test a type against `null`
 * @typeParam T - The type to be tested against `null`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNull<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends null ? Then : Else,
  Else
>;
