[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNull

# Type alias: IfNull\<T, Then, Else\>

```ts
type IfNull<T, Then, Else>: IfNotAnyOrNever<T, T extends null ? Then : Else, Else>;
```

Test a type against `null`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to be tested against `null` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfNull.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/8e5403ef6aee7077fe4c3a20af320ab84f9dedde/types/primitives/IfNull.d.ts#L9)
