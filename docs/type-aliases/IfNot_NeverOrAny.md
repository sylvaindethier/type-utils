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

[primitives/IfNot\_NeverOrAny.d.ts:10](https://github.com/sylvaindethier/typescript-utils/blob/aa5b6783699ae6338b916b5e8e393978eeb43abb/types/primitives/IfNot_NeverOrAny.d.ts#L10)
