import type { IfAny } from "./IfAny.d.ts";

/**
 * Test a type again `unknown`
 * @typeParam T - The type to be tested against `unknown`
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfUnknown<T, Yes = true, No = never> = true extends IsAny<T> ? No : unknown extends T ? Yes : No;
