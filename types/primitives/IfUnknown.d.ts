import type { IfAny } from "./IfAny";

/**
 * Test a type again `unknown`
 * @typeParam T - The type to be tested against `unknown`
 * @typeParam P - The type to return in case the test is positive
 * @typeParam N - The type to return in case the test is negative
 */
export type IfUnknown<T, P = true, N = false> = IfAny<T> extends true
  ? N
  : unknown extends T
  ? P
  : N;
