import type { IfAny, IfNever } from "./index";

/**
 * Test a type against `any` or `never`
 * @typeParam T - The type to test against `any` or `never`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfAnyOrNever<T, Then = true, Else = false> = IfAny<T, Then, IfNever<T, Then, Else>>;

/**
 * {@link IfAnyOrNever}
 */
export type { IfAnyOrNever as IfNeverOrAny };

/**
 * Test a type against not `any` or `never`
 * @typeParam T - The type to test against not `any` or `never`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfAnyOrNever_Not<T, Then = true, Else = false> = IfAnyOrNever<T, Else, Then>;

/**
 * {@link IfAnyOrNever_Not}
 */
export type { IfAnyOrNever_Not as IfNotAnyOrNever };

/**
 * {@link IfAnyOrNever_Not}
 */
export type { IfAnyOrNever_Not as IfNotNeverOrAny };
