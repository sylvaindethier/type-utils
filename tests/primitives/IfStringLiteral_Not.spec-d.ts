import { expectTypeOf } from "vitest";
import type { IfStringLiteral_Not as ImportType } from "#types/index";
type TestType<V extends string> = ImportType<V, Then, Else>;

// Prevents false positive, and true negative
type Then = "Then";
type Else = "Else";

describe("should respect truth table", () => {
  test("with `any` should resolve to `Then`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type V = any;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `never` should resolve to `Then`", () => {
    type V = never;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `string` should resolve to `Then`", () => {
    type V = string;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `''` should resolve to `Else`", () => {
    type V = "";
    type Actual = TestType<V>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `'foo'` should resolve to `Else`", () => {
    type V = "foo";
    type Actual = TestType<V>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `${number}` should resolve to `Else`", () => {
    type V = `${number}`;
    type Actual = TestType<V>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});
