import { expectTypeOf } from "vitest";
import type { NOT as ImportType } from "#types/logic/operators";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestType<X extends boolean, _Y> = ImportType<X, ERROR>;

// Prevents false boolean (`any` | `never`)
type ERROR = "ERROR";
type Y = never;

describe("should respect truth table", () => {
  test("with {`false`} should resolve to `true`", () => {
    type X = false;
    type Actual = TestType<X, Y>;
    type Expected = true;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with {`true`} should resolve to `false`", () => {
    type X = true;
    type Actual = TestType<X, Y>;
    type Expected = false;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});

describe("should `ERROR`", () => {
  type Expected = ERROR;

  test("with {`any`}", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type X = any;
    type Actual = TestType<X, Y>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with {`never`}", () => {
    type X = never;
    type Actual = TestType<X, Y>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with {`boolean`}", () => {
    type X = boolean;
    type Actual = TestType<X, Y>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});
