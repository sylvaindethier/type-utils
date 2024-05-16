import { expectTypeOf } from "vitest";
import type { IfBoolean } from "#types/primitives";
type Actual<T> = IfBoolean<T, TRUE, FALSE>;

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

  test("with `unknown` should resolve to `false`", () => {
    type T = unknown;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `undefined` should resolve to `false`", () => {
    type T = undefined;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `null` should resolve to `false`", () => {
    type T = null;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `boolean` should resolve to `true`", () => {
    type T = boolean;
    type Expected = TRUE;
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

  test("with `number` should resolve to `false`", () => {
    type T = number;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `bigint` should resolve to `false`", () => {
    type T = bigint;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `string` should resolve to `false`", () => {
    type T = string;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `symbol` should resolve to `false`", () => {
    type T = symbol;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });
});
