import type { IfNotAnyOrNever } from "./IfAnyOrNever";

/**
 * Test a type against `string`
 * @typeParam T - The type to be tested against `string`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfString<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends string ? Then : Else,
  Else
>;

/**
 * Test a `string` to be literal
 * @typeParam V - The bigint type to be tested against `bigint` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfStringLiteral<V extends string, Then = true, Else = false> = IfString<
  V,
  string extends V ? Else : Then,
  Else
>;
