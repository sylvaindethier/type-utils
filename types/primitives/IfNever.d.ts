/**
 * Test a type against `never`
 * @typeParam T - The type to test against `never`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNever<T, Then = true, Else = false> = [T] extends [never] ? Then : Else;
