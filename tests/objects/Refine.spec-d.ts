import { expectTypeOf } from "vitest";
import type { Refine as ImportType } from "#types/index";
type TestType<T extends Partial<Base>> = ImportType<Base, T>;

type Base = {
  required: string;
  optional?: number;
};

describe("should error", () => {
  test("when type `Over` has no properties in common with type `Partial<Base>`", () => {
    type T = { unknownProp: unknown };
    // @ts-expect-error Type 'T' has no properties in common with type 'Partial<Base>'
    type Actual = TestType<T>;
    type Expected = Base;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("when type `Over` does not satisfy the constraint `Partial<Base>`", () => {
    type T = { required: number };
    // @ts-expect-error Type `T` does not satisfy the constraint `Partial<Base>`
    type Actual = TestType<T>;
    type Expected = { required: never; optional?: number };
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});

describe("should properly refine the `Base` type", () => {
  test("with refined property", () => {
    type T = { required: "required"; optional: 42 };
    type Actual = TestType<T>;
    type Expected = { required: "required"; optional?: 42 };
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `string` refined property as template string", () => {
    type T = { required: `${number}` };
    type Actual = TestType<T>;
    type Expected = { required: `${number}`; optional?: number };
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});
