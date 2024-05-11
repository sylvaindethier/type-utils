/**
 * Test a type again `any`
 * @typeParam T - The type to be tested against `any`
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfAny<T, Yes = true, No = never> = 0 extends (1 & T) ? Yes : No;
