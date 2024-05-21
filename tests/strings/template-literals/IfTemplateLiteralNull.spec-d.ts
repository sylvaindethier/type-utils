import { expectTypeOf } from "vitest";
import type { IfTemplateLiteralNull as ImportType } from "#types/index";
type TestType<S extends string> = ImportType<S, Then, Else>;

// Prevents false positive, and true negative
type Then = "Then";
type Else = "Else";

describe("should respect definition", () => {
  test("with `string` should resolve to `Else`", () => {
    type S = string;
    type Actual = TestType<S>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `${any}` should resolve to `Else`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type S = `${any}`;
    type Actual = TestType<S>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `${never}` should resolve to `Else`", () => {
    type S = `${never}`;
    type Actual = TestType<S>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `${undefined}` should resolve to `Else`", () => {
    type S = `${undefined}`;
    type Actual = TestType<S>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `${null}` should resolve to `Then`", () => {
    type S = `${null}`;
    type Actual = TestType<S>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `${boolean}` should resolve to `Else`", () => {
    type S = `${boolean}`;
    type Actual = TestType<S>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `${number}` should resolve to `Else`", () => {
    type S = `${number}`;
    type Actual = TestType<S>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `${bigint}` should resolve to `Else`", () => {
    type S = `${bigint}`;
    type Actual = TestType<S>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `${string}` should resolve to `Else`", () => {
    type S = `${string}`;
    type Actual = TestType<S>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});
