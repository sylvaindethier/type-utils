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

[primitives/IfString.d.ts:21](https://github.com/sylvaindethier/typescript-utils/blob/c2db051f7ef7ff24cba2e92cfd5e891000492922/types/primitives/IfString.d.ts#L21)
