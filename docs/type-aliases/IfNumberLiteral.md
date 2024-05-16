[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNumberLiteral

# Type alias: IfNumberLiteral\<V, Then, Else\>

```ts
type IfNumberLiteral<V, Then, Else>: IfNumber<V, number extends V ? Else : Then, Else>;
```

Test a `number` to be literal

## Type parameters

• **V** *extends* `number`

The number to be tested against `number` literal

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfNumber.d.ts:21](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/primitives/IfNumber.d.ts#L21)
