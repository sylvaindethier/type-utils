import type { IfBooleanLiteral } from "../primitives/IfBoolean";

/**
 * Test a `boolean` against to be `true`
 * @typeParam B - The `boolean` to test against `true`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 * @typeParam Error - The type to return in case the boolean is not literal
 */
export type If<B extends boolean, Then = true, Else = false, Error = never> = IfBooleanLiteral<
  B,
  true extends B ? Then : Else,
  Error
>;

/**
 * Test a `boolean` to be `false`
 * @typeParam B - The `boolean` to test against `false`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 * @typeParam Error - The type to return in case the boolean is not literal
 */
export type IfNot<B extends boolean, Then = true, Else = false, Error = never> = If<
  B,
  Else,
  Then,
  Error
>;
