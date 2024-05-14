import { expectTypeOf } from "vitest";
import type { IfNot_NeverOrAny } from "#types/primitives/IfNot_NeverOrAny";

describe("IfNot_NeverOrAny type function", () => {
  // Prevents false positive, and true negative
  type TRUE = "TRUE";
  type FALSE = "FALSE";
  type Test<T> = IfNot_NeverOrAny<T, TRUE, FALSE>;

  test("with `never` type", () => {
    type Actual = never;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<FALSE>();
  });

  test("with `any` type", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Actual = any;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<FALSE>();
  });

  test("with `unknown` type", () => {
    type Actual = unknown;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });

  test("with `undefined` type", () => {
    type Actual = undefined;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });

  test("with `null` type", () => {
    type Actual = null;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });

  test("with `boolean` type", () => {
    type Actual = boolean;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });

  test("with `number` type", () => {
    type Actual = number;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });

  test("with `bigint` type", () => {
    type Actual = bigint;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });

  test("with `string` type", () => {
    type Actual = string;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });

  test("with `symbol` type", () => {
    type Actual = symbol;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });
});
