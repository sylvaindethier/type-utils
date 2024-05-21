import type { IfUndefined } from "../../primitives";

/**
 * Test a `string` against `${undefined}` (eqv. `"undefined"`) template literal
 * @typeParam S - The `string` to test against `${undefined}` template literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfTemplateLiteralUndefined<
  S extends string,
  Then = "Then",
  Else = "Else"
> = IfUndefined<S extends `${infer T extends undefined}` ? T : never, Then, Else>;
