export type * from "./IfSymbolLiteral";
import type { IfNotAnyOrNever } from "./";

/**
 * Test a type against `symbol`
 * @typeParam T - The type to test against `symbol`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfSymbol<T, Then = true, Else = false> = IfNotAnyOrNever<
  T,
  T extends symbol ? Then : Else,
  Else
>;

/**
 * Test a type against not `symbol`
 * @typeParam T - The type to test against `symbol`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfSymbol_Not<T, Then = true, Else = false> = IfSymbol<T, Else, Then>;

/**
 * {@link IfSymbol_Not}
 */
export type { IfSymbol_Not as IfNotSymbol };
