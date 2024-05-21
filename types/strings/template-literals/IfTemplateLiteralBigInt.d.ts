import type { IfBigInt } from "../../primitives";

/**
 * Test a `string` against `${bigint}` template literal
 * @typeParam S - The `string` to test against `${bigint}` template literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfTemplateLiteralBigInt<S extends string, Then = true, Else = false> = IfBigInt<
  S extends `${infer T extends bigint}` ? T : never,
  Then,
  Else
>;
