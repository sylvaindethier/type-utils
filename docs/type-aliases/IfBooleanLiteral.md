[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfBooleanLiteral

# Type alias: IfBooleanLiteral\<V, Then, Else\>

```ts
type IfBooleanLiteral<V, Then, Else>: IfBoolean<V, boolean extends V ? Else : Then, Else>;
```

Test a `boolean` to be literal, whether `true` or `false`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `V` *extends* `boolean` | - | The boolean to test against `boolean` literal |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfBoolean.d.ts:21](https://github.com/sylvaindethier/typescript-utils/blob/b4bd497afc46fe47c24db22965f824eb3fdda8ec/types/primitives/IfBoolean.d.ts#L21)
