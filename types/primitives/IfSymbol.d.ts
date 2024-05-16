import type { IfNotAnyOrNever } from "./IfAnyOrNever";

/**
 * Test a type against `symbol`
 * @typeParam T - The type to be tested against `symbol`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfSymbol<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends symbol ? Then : Else,
  Else
>;
