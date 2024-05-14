/**
 * Test a type against `any`
 * @typeParam T - The type to be tested against `any`
 * @typeParam P - The type to return in case the test is positive
 * @typeParam N - The type to return in case the test is negative
 */
export type IfAny<T, P = true, N = false> = 0 extends 1 & T ? P : N;
