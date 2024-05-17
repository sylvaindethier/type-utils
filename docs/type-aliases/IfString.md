[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfString

# Type alias: IfString\<T, Then, Else\>

```ts
type IfString<T, Then, Else>: IfNotAnyOrNever<T, T extends string ? Then : Else, Else>;
```

Test a type against `string`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to be tested against `string` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfString.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/fc923b9b8f624519a4e708a123084592ab3d1c55/types/primitives/IfString.d.ts#L9)
