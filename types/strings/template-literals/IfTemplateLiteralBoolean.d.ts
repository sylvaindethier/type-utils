import type { IfBoolean } from "../../primitives";

/**
 * Test a `string` against `${boolean}` (eqv. `"false" | "true"`) template literal
 * @typeParam S - The `string` to test against `${boolean}` template literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfTemplateLiteralBoolean<S extends string, Then = true, Else = false> = IfBoolean<
  S extends `${infer T extends boolean}` ? T : never,
  Then,
  Else
>;
