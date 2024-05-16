/**
 * Test a type against `any`
 * @typeParam T - The type to test against `any`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfAny<T, Then = true, Else = false> = 0 extends 1 & T ? Then : Else;
