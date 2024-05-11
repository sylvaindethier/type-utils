/**
 * Returns the string if not empty, `never` otherwise
 * @typeParam S - The string to compare with not empty string
 */
export type NotEmptyString<S extends string> = S extends `${infer Head}${infer Tail}`
  ? `${Head}${Tail}`
  : never;

/**
 * Checks if a string is not empty
 * @typeParam S - The string to compare with not empty string
 */
export type IsNotEmptyString<S extends string> = NotEmptyString<S> extends never ? false : true;

/**
 * Returns the string if empty
 * @typeParam S - The string to compare with empty string
 */
export type EmptyString<S extends string> = NotEmptyString<S> | "";

/**
 * Checks if a string is empty
 * @typeParam S - The string to compare with empty string
 */
export type IsEmptyString<S extends string> = IsNotEmptyString<S> extends true ? false : true;

/**
 * Represents any whitespace character
 */
export type Whitespace = " " | "\t" | "\r" | "\n" | "\v" | "\f";

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
