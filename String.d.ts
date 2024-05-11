/**
 * Test a string to be generic `string`
 * @typeParam StringType - The string to test
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfGenericString<
  StringType extends string,
  Yes = StringType,
  No = never
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = StringType extends `${any}` ? No : Yes;

/**
 * Test a string that represents a number
 * @typeParam StringType - The string to test
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfNumberString<
  StringType extends string,
  Yes = StringType,
  No = never
> = StringType extends `${number}` ? Yes : No;

/**
 * Test a string that represents a bigint
 * @typeParam StringType - The string to test
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfBigIntString<
  StringType extends string,
  Yes = StringType,
  No = never
> = StringType extends `${number}n` ? Yes : No;

/**
 * Test a string that represents a boolean
 * @typeParam StringType - The string to test
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfBooleanString<
  StringType extends string,
  Yes = StringType,
  No = never
> = StringType extends `${boolean}` ? Yes : No;

/**
 * Test a string that represents null
 * @typeParam StringType - The string to test
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfNullString<
  StringType extends string,
  Yes = StringType,
  No = never
> = StringType extends `${null}` ? Yes : No;

/**
 * Test a string that represents undefined
 * @typeParam StringType - The string to test
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfUndefinedString<
  StringType extends string,
  Yes = StringType,
  No = never
> = StringType extends `${undefined}` ? Yes : No;

/**
 * Represents any whitespace character
 */
export type Whitespace = " " | "\t" | "\r" | "\n" | "\v" | "\f";

/**
 * Test a string that represents undefined
 * @typeParam StringType - The string to test
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfWhitespaceString<
  StringType extends string,
  Yes = StringType,
  No = never
> = StringType extends `${Whitespace}` ? Yes : No;

/**
 * Test a string to be empty
 * @typeParam StringType - The string to test
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfEmptyString<
  StringType extends string,
  Yes = StringType,
  No = never
> = StringType extends "" ? Yes : No;

/**
 * Test a string to be not empty
 * @typeParam StringType - The string to test
 * @typeParam Yes - The type to return in case the test is positive
 * @typeParam No - The type to return  in case the test is negative
 */
export type IfNotEmptyString<
  StringType extends string,
  Yes = StringType,
  No = never
> = IfEmptyString<StringType> extends never ? Yes : No;

/**
 * Trim a string from its end
 * Removes whitespace characters from the end of a string
 * @typeParam StringType - The string to trim from end
 */
export type TrimEnd<StringType extends string> = StringType extends `${infer substr}${Whitespace}`
  ? `${TrimEnd<substr>}`
  : StringType;

/**
 * Trim a string from its start
 * Removes whitespace characters from the start of a string
 * @typeParam StringType - The string to trim from start
 */
export type TrimStart<StringType extends string> = StringType extends `${Whitespace}${infer substr}`
  ? `${TrimStart<substr>}`
  : StringType;

/**
 * Trim a string
 * Removes whitespace characters from the start and the end of a string
 * @typeParam StringType - The string to trim
 */
export type Trim<StringType extends string> = TrimStart<TrimEnd<StringType>>;
