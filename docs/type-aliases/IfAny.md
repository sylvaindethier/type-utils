[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfAny

# Type alias: IfAny\<T, P, N\>

```ts
type IfAny<T, P, N>: 0 extends 1 & T ? P : N;
```

Test a type against `any`

## Type parameters

• **T**

The type to be tested against `any`

• **P** = `true`

The type to return in case the test is positive

• **N** = `false`

The type to return in case the test is negative

## Source

[primitives/IfAny.d.ts:7](https://github.com/sylvaindethier/typescript-utils/blob/fabc6a21dcb182829a282c75854c4036ee731328/src/types/primitives/IfAny.d.ts#L7)
