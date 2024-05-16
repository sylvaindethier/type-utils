import { expectTypeOf } from "vitest";
import type { AND } from "#types/logic/operators";
type Actual<X extends boolean, Y extends boolean> = AND<X, Y, ERROR>;

// Prevents false boolean (`any` | `never`)
type ERROR = "ERROR";

describe("should respect truth table", () => {
  test("with {`false`, `false`} should resolve to `false`", () => {
    type Expected = false;
    type X = false;
    type Y = false;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });

  test("with {`false`, `true`} should resolve to `false`", () => {
    type Expected = false;
    type X = false;
    type Y = true;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });

  test("with {`true`, `false`} should resolve to `false`", () => {
    type Expected = false;
    type X = true;
    type Y = false;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });

  test("with {`true`, `true`} should resolve to `true`", () => {
    type Expected = true;
    type X = true;
    type Y = true;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });
});

describe("should `ERROR`", () => {
  type Expected = ERROR;

  test("with {`never`, `true`}", () => {
    type X = never;
    type Y = true;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });

  test("with {`any`, `true`}", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type X = any;
    type Y = true;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });

  test("with {`boolean`, `boolean`}", () => {
    type X = boolean;
    type Y = boolean;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });
});
