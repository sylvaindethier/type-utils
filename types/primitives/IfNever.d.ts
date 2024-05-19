/**
 * Test a type against `never`
 * @typeParam T - The type to test against `never`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNever<T, Then = true, Else = false> = [T] extends [never] ? Then : Else;

/**
 * Test a type against not `never`
 * @typeParam T - The type to test against not `never`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNever_Not<T, Then = true, Else = false> = IfNever<T, Else, Then>;

/**
 * {@link IfNever_Not}
 */
export type { IfNever_Not as IfNotNever };
