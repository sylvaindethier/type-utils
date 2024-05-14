import { expectTypeOf } from "vitest";
import type { IfBoolean, IfBooleanLiteral } from "#types/primitives/IfBoolean";

describe("IfBoolean type function", () => {
  // Prevents false positive, and true negative
  type TRUE = "TRUE";
  type FALSE = "FALSE";
  type Test<T> = IfBoolean<T, TRUE, FALSE>;

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
    expectTypeOf<Test<Actual>>().toEqualTypeOf<FALSE>();
  });

  test("with `undefined` type", () => {
    type Actual = undefined;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<FALSE>();
  });

  test("with `null` type", () => {
    type Actual = null;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<FALSE>();
  });

  test("with `boolean` type", () => {
    type Actual = boolean;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });

  test("with `number` type", () => {
    type Actual = number;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<FALSE>();
  });

  test("with `bigint` type", () => {
    type Actual = bigint;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<FALSE>();
  });

  test("with `string` type", () => {
    type Actual = string;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<FALSE>();
  });

  test("with `symbol` type", () => {
    type Actual = symbol;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<FALSE>();
  });
});

describe("IfBooleanLiteral type function", () => {
  // Prevents false positive, true negative, and false boolean
  type TRUE = "TRUE";
  type FALSE = "FALSE";
  type ERROR = "ERROR";
  type Test<T extends boolean> = IfBooleanLiteral<T, TRUE, FALSE, ERROR>;

  test("with `never` type", () => {
    type Actual = never;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<ERROR>();
  });

  test("with `any` type", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Actual = any;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<ERROR>();
  });

  test("with `boolean` type", () => {
    type Actual = boolean;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<FALSE>();
  });

  test("with `true` type", () => {
    type Actual = true;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });

  test("with `false` type", () => {
    type Actual = false;
    expectTypeOf<Test<Actual>>().toEqualTypeOf<TRUE>();
  });
});
