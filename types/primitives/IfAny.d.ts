/**
 * Test a type against `any`
 * @typeParam T - The type to test against `any`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfAny<T, Then = true, Else = false> = 0 extends 1 & T ? Then : Else;

/**
 * Test a type against not `any`
 * @typeParam T - The type to test against not `any`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfAny_Not<T, Then = true, Else = false> = IfAny<T, Else, Then>;

/**
 * {@link IfAny_Not}
 */
export type { IfAny_Not as IfNotAny };
