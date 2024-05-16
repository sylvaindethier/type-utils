import { expectTypeOf } from "vitest";
import type { IfBooleanLiteral } from "#types/primitives";
type Actual<T extends boolean> = IfBooleanLiteral<T, TRUE, FALSE>;

// Prevents false positive, true negative, and error
type TRUE = "TRUE";
type FALSE = "FALSE";

describe("should respect truth table", () => {
  test("with `any` should resolve to `false`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type T = any;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `never` should resolve to `false`", () => {
    type T = never;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `boolean` should resolve to `false`", () => {
    type T = boolean;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `false` should resolve to `true`", () => {
    type T = false;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `true` should resolve to `true`", () => {
    type T = true;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });
});
