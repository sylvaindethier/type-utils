/* eslint-disable @typescript-eslint/no-explicit-any */
import { expectTypeOf } from "vitest";
import type { IfNumberLiteral as ImportType } from "#types/index";
type TestType<V extends number> = ImportType<V, Then, Else>;

// Prevents false positive, and true negative
type Then = "Then";
type Else = "Else";

describe("should respect truth table", () => {
  test("with `any` should resolve to `Else`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type V = any;
    type Actual = TestType<V>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `never` should resolve to `Else`", () => {
    type V = never;
    type Actual = TestType<V>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `number` should resolve to `Else`", () => {
    type V = number;
    type Actual = TestType<V>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `42` should resolve to `Then`", () => {
    type V = 42;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `42.73` should resolve to `Then`", () => {
    type V = 42.73;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `42_730` should resolve to `Then`", () => {
    type V = 42_730;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});
