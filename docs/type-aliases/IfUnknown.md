[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfUnknown

# Type alias: IfUnknown\<T, P, N\>

```ts
type IfUnknown<T, P, N>: IfAny<T> extends true ? N : unknown extends T ? P : N;
```

Test a type again `unknown`

## Type parameters

• **T**

The type to be tested against `unknown`

• **P** = `true`

The type to return in case the test is positive

• **N** = `false`

The type to return in case the test is negative

## Source

[primitives/IfUnknown.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/edc656b23be8c3f01c4f75ed76a05aa613f4dd0c/types/primitives/IfUnknown.d.ts#L9)
