/**
 * Test a type against `never`
 * @typeParam T - The type to be tested against `never`
 * @typeParam P - The type to return in case the test is positive
 * @typeParam N - The type to return in case the test is negative
 */
export type IfNever<T, P = true, N = false> = [T] extends [never] ? P : N;
