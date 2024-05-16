import { expectTypeOf } from "vitest";
import type { IfAnyOrNever_Not } from "#types/primitives";
type Actual<T> = IfAnyOrNever_Not<T, TRUE, FALSE>;

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

  test("with `unknown` should resolve to `true`", () => {
    type T = unknown;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `undefined` should resolve to `true`", () => {
    type T = undefined;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `null` should resolve to `true`", () => {
    type T = null;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `boolean` should resolve to `true`", () => {
    type T = boolean;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `number` should resolve to `true`", () => {
    type T = number;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `bigint` should resolve to `true`", () => {
    type T = bigint;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `string` should resolve to `true`", () => {
    type T = string;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `symbol` should resolve to `true`", () => {
    type T = symbol;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });
});
