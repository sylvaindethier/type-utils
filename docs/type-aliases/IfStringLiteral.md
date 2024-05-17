[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfStringLiteral

# Type alias: IfStringLiteral\<V, Then, Else\>

```ts
type IfStringLiteral<V, Then, Else>: IfString<V, string extends V ? Else : Then, Else>;
```

Test a `string` to be literal

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `V` *extends* `string` | - | The bigint type to be tested against `bigint` literal |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfString.d.ts:21](https://github.com/sylvaindethier/typescript-utils/blob/83679697f5d7fa0b2956157cf34be5813a5e5434/types/primitives/IfString.d.ts#L21)
