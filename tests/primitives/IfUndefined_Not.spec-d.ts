import { expectTypeOf } from "vitest";
import type { IfUndefined_Not as ImportType } from "#types/index";
type TestType<T> = ImportType<T, Then, Else>;

// Prevents false positive, and true negative
type Then = "Then";
type Else = "Else";

describe("should respect truth table", () => {
  test("with `any` should resolve to `Then`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type T = any;
    type Actual = TestType<T>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `never` should resolve to `Then`", () => {
    type T = never;
    type Actual = TestType<T>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `unknown` should resolve to `Then`", () => {
    type T = unknown;
    type Actual = TestType<T>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `undefined` should resolve to `Else`", () => {
    type T = undefined;
    type Actual = TestType<T>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `null` should resolve to `Then`", () => {
    type T = null;
    type Actual = TestType<T>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `boolean` should resolve to `Then`", () => {
    type T = boolean;
    type Actual = TestType<T>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `number` should resolve to `Then`", () => {
    type T = number;
    type Actual = TestType<T>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `bigint` should resolve to `Then`", () => {
    type T = bigint;
    type Actual = TestType<T>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `string` should resolve to `Then`", () => {
    type T = string;
    type Actual = TestType<T>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `symbol` should resolve to `Then`", () => {
    type T = symbol;
    type Actual = TestType<T>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});
