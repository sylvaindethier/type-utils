import { expectTypeOf } from "vitest";
import type { INH as ImportType } from "#types/index";
type TestType<X extends boolean, Y extends boolean> = ImportType<X, Y, ERROR>;

// Prevents false boolean (`any` | `never`)
type ERROR = "ERROR";

describe("should respect truth table", () => {
  test("with {`false`, `false`} should resolve to `false`", () => {
    type X = false;
    type Y = false;
    type Actual = TestType<X, Y>;
    type Expected = false;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with {`false`, `true`} should resolve to `false`", () => {
    type X = false;
    type Y = true;
    type Actual = TestType<X, Y>;
    type Expected = false;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with {`true`, `false`} should resolve to `true`", () => {
    type X = true;
    type Y = false;
    type Actual = TestType<X, Y>;
    type Expected = true;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with {`true`, `true`} should resolve to `false`", () => {
    type X = true;
    type Y = true;
    type Actual = TestType<X, Y>;
    type Expected = false;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});

describe("should `ERROR`", () => {
  type Expected = ERROR;

  test("with {`never`, `true`}", () => {
    type X = never;
    type Y = true;
    type Actual = TestType<X, Y>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with {`true`, `never`}", () => {
    type X = true;
    type Y = never;
    type Actual = TestType<X, Y>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with {`any`, `true`}", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type X = any;
    type Y = true;
    type Actual = TestType<X, Y>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with {`true`, `any`}", () => {
    type X = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Y = any;
    type Actual = TestType<X, Y>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with {`boolean`, `boolean`}", () => {
    type X = boolean;
    type Y = boolean;
    type Actual = TestType<X, Y>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});
