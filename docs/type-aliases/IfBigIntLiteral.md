[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfBigIntLiteral

# Type alias: IfBigIntLiteral\<V, Then, Else\>

```ts
type IfBigIntLiteral<V, Then, Else>: IfBigInt<V, bigint extends V ? Else : Then, Else>;
```

Test a `bigint` to be literal

## Type parameters

• **V** *extends* `bigint`

The bigint type to be tested against `bigint` literal

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfBigInt.d.ts:21](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/primitives/IfBigInt.d.ts#L21)
