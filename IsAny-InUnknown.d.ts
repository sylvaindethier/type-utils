/**
 * Compare a type again `any`
 * @typeParam T - The type to be tested against `any`
 */
export type IsAny<T> = 0 extends (1 & T) ? true : never;

/**
 * Compare a type again `unknown`
 * @typeParam T - The type to be tested against `unknown`
 */
export type IsUnknown<T> = true extends IsAny<T> ? never : (unknown extends T ? true : never);
