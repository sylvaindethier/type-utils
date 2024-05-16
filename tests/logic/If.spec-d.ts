import { expectTypeOf } from "vitest";
import type { If } from "#types/logic/If";
type Actual<B extends boolean> = If<B, TRUE, FALSE, ERROR>;

// Prevents false positive, true negative, and error
type TRUE = "TRUE";
type FALSE = "FALSE";
type ERROR = "ERROR";

describe("should respect truth table", () => {
  test("with `false` should resolve to `false`", () => {
    type Expected = FALSE;
    type Condition = false;
    expectTypeOf<Actual<Condition>>().toEqualTypeOf<Expected>();
  });

  test("with `true` should resolve to `true`", () => {
    type Expected = TRUE;
    type Condition = true;
    expectTypeOf<Actual<Condition>>().toEqualTypeOf<Expected>();
  });
});

describe("should `ERROR`", () => {
  type Expected = ERROR;

  test("with `never`", () => {
    type Condition = never;
    expectTypeOf<Actual<Condition>>().toEqualTypeOf<Expected>();
  });

  test("with `any`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Condition = any;
    expectTypeOf<Actual<Condition>>().toEqualTypeOf<Expected>();
  });

  test("with `boolean`", () => {
    type Condition = boolean;
    expectTypeOf<Actual<Condition>>().toEqualTypeOf<Expected>();
  });
});
