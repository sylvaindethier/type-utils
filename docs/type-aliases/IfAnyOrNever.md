[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfAnyOrNever

# Type alias: IfAnyOrNever\<T, Then, Else\>

```ts
type IfAnyOrNever<T, Then, Else>: IfAny<T, Then, IfNever<T, Then, Else>>;
```

Test a type against `any` or `never`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to test against `any` or `never` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfAnyOrNever.d.ts:10](https://github.com/sylvaindethier/typescript-utils/blob/b4bd497afc46fe47c24db22965f824eb3fdda8ec/types/primitives/IfAnyOrNever.d.ts#L10)
