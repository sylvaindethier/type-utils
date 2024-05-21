import type { IfAny } from "../../primitives";

/**
 * Test a `string` against `${any}` template literal
 * @typeParam S - The `string` to test against `${any}` template literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfTemplateLiteralAny<S extends string, Then = true, Else = false> = IfAny<
  S extends `${infer T}` ? T : never,
  Then,
  Else
>;
