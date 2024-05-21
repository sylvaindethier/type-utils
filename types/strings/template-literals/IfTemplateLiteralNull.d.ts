import type { IfNull } from "../../primitives";

/**
 * Test a `string` against `${null}` (eqv. `"null"`) template literal
 * @typeParam S - The `string` to test against `${null}` template literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfTemplateLiteralNull<S extends string, Then = true, Else = false> = IfNull<
  S extends `${infer T extends null}` ? T : never,
  Then,
  Else
>;
