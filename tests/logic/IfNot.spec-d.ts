import { expectTypeOf } from "vitest";
import type { IfNot as ImportType } from "#types/index";
type TestType<B extends boolean> = ImportType<B, Then, Else, ERROR>;

// Prevents false positive, true negative, and error
type Then = "Then";
type Else = "Else";
type ERROR = "ERROR";

describe("should respect truth table", () => {
  test("with `false` should resolve to `Then`", () => {
    type B = false;
    type Actual = TestType<B>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `true` should resolve to `Else`", () => {
    type B = true;
    type Actual = TestType<B>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});

describe("should `ERROR`", () => {
  type Expected = ERROR;

  test("with `any`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type B = any;
    type Actual = TestType<B>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `never`", () => {
    type B = never;
    type Actual = TestType<B>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `boolean`", () => {
    type B = boolean;
    type Actual = TestType<B>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});
