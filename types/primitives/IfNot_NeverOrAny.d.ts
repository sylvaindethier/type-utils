import type { IfNever } from "./IfNever.d.ts";
import type { IfAny } from "./IfAny.d.ts";

/**
 * Test a type against not (`never` or `any`)
 * @typeParam T - The type to be tested against not (`never` or `any`)
 * @typeParam P - The type to return in case the test is positive
 * @typeParam N - The type to return in case the test is negative
 */
export type IfNot_NeverOrAny<T, P = true, N = false> = IfNever<T> extends true
  ? N
  : IfAny<T> extends true
  ? N
  : P;
