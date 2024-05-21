import type { IfTemplateLiteralAny } from "./";
import type { IfTemplateLiteralNever } from "./";
import type { IfTemplateLiteralUndefined } from "./";
import type { IfTemplateLiteralNull } from "./";
import type { IfTemplateLiteralBoolean } from "./";
import type { IfTemplateLiteralNumber } from "./";
import type { IfTemplateLiteralBigInt } from "./";

/**
 * Test a `string` against `${string}` (eqv. `string`) template literal
 * @typeParam S - The `string` to test against `${string}` template literal
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfTemplateLiteralString<
  S extends string,
  Then = true,
  Else = false
> = IfTemplateLiteralAny<
  S,
  Else,
  IfTemplateLiteralNever<
    S,
    Else,
    IfTemplateLiteralUndefined<
      S,
      Else,
      IfTemplateLiteralNull<
        S,
        Else,
        IfTemplateLiteralBoolean<
          S,
          Else,
          IfTemplateLiteralNumber<S, Else, IfTemplateLiteralBigInt<S, Else, Then>>
        >
      >
    >
  >
>;
