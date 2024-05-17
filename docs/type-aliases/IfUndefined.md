[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfUndefined

# Type alias: IfUndefined\<T, Then, Else\>

```ts
type IfUndefined<T, Then, Else>: IfNotAnyOrNever<T, T extends undefined ? Then : Else, Else>;
```

Test a type against `undefined`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to be tested against `undefined` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfUndefined.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/f271884d3138386b859e820c285b0ab8864227bb/types/primitives/IfUndefined.d.ts#L9)
