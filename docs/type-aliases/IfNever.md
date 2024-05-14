[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNever

# Type alias: IfNever\<T, P, N\>

```ts
type IfNever<T, P, N>: [T] extends [never] ? P : N;
```

Test a type against `never`

## Type parameters

• **T**

The type to be tested against `never`

• **P** = `true`

The type to return in case the test is positive

• **N** = `false`

The type to return in case the test is negative

## Source

[primitives/IfNever.d.ts:7](https://github.com/sylvaindethier/typescript-utils/blob/5d7e70bdb051f6b560ec7c4f6d01c394a4b286ab/src/types/primitives/IfNever.d.ts#L7)
