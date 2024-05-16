import { expectTypeOf } from "vitest";
import type { NOT } from "#types/logic/operators";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Actual<X extends boolean, _Y> = NOT<X, ERROR>;

// Prevents false boolean (`any` | `never`)
type ERROR = "ERROR";
type Y = never;

describe("should respect truth table", () => {
  test("with {`false`} should result to `true`", () => {
    type Expected = true;
    type X = false;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });

  test("with {`true`} should result to `false`", () => {
    type Expected = false;
    type X = true;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });
});

describe("should `ERROR`", () => {
  type Expected = ERROR;

  test("with {`never`}", () => {
    type X = never;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });

  test("with {`any`}", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type X = any;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });

  test("with {`boolean`}", () => {
    type X = boolean;
    expectTypeOf<Actual<X, Y>>().toEqualTypeOf<Expected>();
  });
});
