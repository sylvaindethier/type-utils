import type { IfNot_NeverOrAny } from "./IfNot_NeverOrAny";

/**
 * Test a type against `boolean`
 * @typeParam T - The type to be tested against `boolean`
 * @typeParam P - The type to return in case the test is positive
 * @typeParam N - The type to return in case the test is negative
 */
export type IfBoolean<T, P = true, N = false> = IfNot_NeverOrAny<T> extends false
  ? N
  : T extends boolean
  ? P
  : N;

/**
 * Test a boolean type to be literal, whether `true` or `false`
 * @typeParam V - The boolean type to be tested against `boolean` literal
 * @typeParam P - The type to return in case the test is positive
 * @typeParam N - The type to return in case the test is negative
 * @typeParam E - The type to return in case of false positive
 */
export type IfBooleanLiteral<
  V extends boolean,
  P = true,
  N = false,
  E = never
> = IfBoolean<V> extends false ? E : boolean extends V ? N : P;
