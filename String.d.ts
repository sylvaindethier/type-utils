/**
 * Each Type function has for least types:
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */

/**
 * Test a string that represents a number
 * @typeParam S - The string to test
 */
export type NumberString<S extends string, Yes = S, No = never> = S extends `${number}` ? Yes : No;

/**
 * Test a string that represents a bigint
 * @typeParam S - The string to test
 */
export type BigIntString<S extends string, Yes = S, No = never> = S extends `${number}n` ? Yes : No;

/**
 * Test a string that represents a boolean
 * @typeParam S - The string to test
 */
export type BooleanString<S extends string, Yes = S, No = never> = S extends `${boolean}`
  ? Yes
  : No;

/**
 * Test a string that represents null
 * @typeParam S - The string to test
 */
export type NullString<S extends string, Yes = S, No = never> = S extends `${null}` ? Yes : No;

/**
 * Test a string that represents undefined
 * @typeParam S - The string to test
 */
export type UndefinedString<S extends string, Yes = S, No = never> = S extends `${undefined}`
  ? Yes
  : No;

/**
 * Test a string to not be generic `string`
 * @typeParam S - The string to test
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NotString<S extends string, Yes = S, No = never> = S extends `${any}` ? Yes : No;

/**
 * Represents any whitespace character
 */
export type Whitespace = " " | "\t" | "\r" | "\n" | "\v" | "\f";

/**
 * Test a string that represents undefined
 * @typeParam S - The string to test
 */
export type WhitespaceString<S extends string, Yes = S, No = never> = S extends `${Whitespace}`
  ? Yes
  : No;

/**
 * Test a string to be empty
 * @typeParam S - The string to test
 */
export type EmptyString<S extends string, Yes = S, No = never> = S extends "" ? Yes : No;

/**
 * Test a string to be not empty
 * @typeParam S - The string to test
 */
export type NotEmptyString<S extends string, Yes = S, No = never> = EmptyString<S> extends never
  ? Yes
  : No;

/**
 * Trim a string from its end
 * Removes whitespace characters from the end of a string
 * @typeParam S - The string to trim from end
 */
export type TrimEnd<S extends string> = S extends `${infer substr}${Whitespace}`
  ? `${TrimEnd<substr>}`
  : S;

/**
 * Trim a string from its start
 * Removes whitespace characters from the start of a string
 * @typeParam S - The string to trim from start
 */
export type TrimStart<S extends string> = S extends `${Whitespace}${infer substr}`
  ? `${TrimStart<substr>}`
  : S;

/**
 * Trim a string
 * Removes whitespace characters from the start and the end of a string
 * @typeParam S - The string to trim
 */
export type Trim<S extends string> = TrimStart<TrimEnd<S>>;
