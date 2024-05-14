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

[primitives/IfUnknown.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/5d7e70bdb051f6b560ec7c4f6d01c394a4b286ab/src/types/primitives/IfUnknown.d.ts#L9)
