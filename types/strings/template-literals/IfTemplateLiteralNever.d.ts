import type { IfNever } from "../../primitives";

/**
 * Test a `string` against `${never}` (eqv. `never`) template literal
 * {@link IfNever}
 * @typeParam S - The `string` to test against `${never}` template literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfTemplateLiteralNever<S extends string, Then = true, Else = false> = IfNever<
  S,
  Then,
  Else
>;
