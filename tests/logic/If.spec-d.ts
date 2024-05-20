import { expectTypeOf } from "vitest";
import type { If } from "#types/logic";
type Actual<B extends boolean> = If<B, Then, Else, ERROR>;

// Prevents false positive, true negative, and error
type Then = "Then";
type Else = "Else";
type ERROR = "ERROR";

describe("should respect truth table", () => {
  test("with `false` should resolve to `Else`", () => {
    type Condition = false;
    type Expected = Else;
    expectTypeOf<Actual<Condition>>().toEqualTypeOf<Expected>();
  });

  test("with `true` should resolve to `Then`", () => {
    type Condition = true;
    type Expected = Then;
    expectTypeOf<Actual<Condition>>().toEqualTypeOf<Expected>();
  });
});

describe("should `ERROR`", () => {
  type Expected = ERROR;

  test("with `any`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Condition = any;
    expectTypeOf<Actual<Condition>>().toEqualTypeOf<Expected>();
  });

  test("with `never`", () => {
    type Condition = never;
    expectTypeOf<Actual<Condition>>().toEqualTypeOf<Expected>();
  });

  test("with `boolean`", () => {
    type Condition = boolean;
    expectTypeOf<Actual<Condition>>().toEqualTypeOf<Expected>();
  });
});
