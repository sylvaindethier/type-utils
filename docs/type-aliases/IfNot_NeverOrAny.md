[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNot\_NeverOrAny

# Type alias: IfNot\_NeverOrAny\<T, P, N\>

```ts
type IfNot_NeverOrAny<T, P, N>: IfNever<T> extends true ? N : IfAny<T> extends true ? N : P;
```

Test a type against not (`never` or `any`)

## Type parameters

• **T**

The type to be tested against not (`never` or `any`)

• **P** = `true`

The type to return in case the test is positive

• **N** = `false`

The type to return in case the test is negative

## Source

[primitives/IfNot\_NeverOrAny.d.ts:10](https://github.com/sylvaindethier/typescript-utils/blob/edc656b23be8c3f01c4f75ed76a05aa613f4dd0c/types/primitives/IfNot_NeverOrAny.d.ts#L10)
