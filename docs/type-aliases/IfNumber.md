[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNumber

# Type alias: IfNumber\<T, Then, Else\>

```ts
type IfNumber<T, Then, Else>: IfNotAnyOrNever<T, T extends number ? Then : Else, Else>;
```

Test a type against `number`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to be tested against `number` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfNumber.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/b4bd497afc46fe47c24db22965f824eb3fdda8ec/types/primitives/IfNumber.d.ts#L9)
