import type { IfNumber } from "../../primitives";

/**
 * Test a `string` against `${number}` template literal
 * @typeParam S - The `string` to test against `${number}` template literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfTemplateLiteralNumber<S extends string, Then = true, Else = false> = IfNumber<
  S extends `${infer T extends number}` ? T : never,
  Then,
  Else
>;
