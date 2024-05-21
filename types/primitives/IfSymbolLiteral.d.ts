import type { IfNotSymbol } from "./";

/**
 * Test a `symbol` to be literal
 * @typeParam V - The `symbol` to test against `symbol` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfSymbolLiteral<V extends symbol, Then = true, Else = false> = IfNotSymbol<
  V,
  Else,
  symbol extends V ? Else : Then
>;

/**
 * Test a `symbol` to not be literal
 * @typeParam V - The `symbol` to test against not `symbol` literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfSymbolLiteral_Not<V extends symbol, Then = true, Else = false> = IfSymbolLiteral<
  V,
  Else,
  Then
>;

/**
 * {@link IfSymbolLiteral_Not}
 */
export { IfSymbolLiteral_Not as IfNotSymbolLiteral };
