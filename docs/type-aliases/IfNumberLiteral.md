[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNumberLiteral

# Type alias: IfNumberLiteral\<V, Then, Else\>

```ts
type IfNumberLiteral<V, Then, Else>: IfNumber<V, number extends V ? Else : Then, Else>;
```

Test a `number` to be literal

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `V` *extends* `number` | - | The number to be tested against `number` literal |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfNumber.d.ts:21](https://github.com/sylvaindethier/typescript-utils/blob/83679697f5d7fa0b2956157cf34be5813a5e5434/types/primitives/IfNumber.d.ts#L21)
