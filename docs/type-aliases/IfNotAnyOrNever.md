[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNotAnyOrNever

# Type alias: IfNotAnyOrNever\<T, Then, Else\>

```ts
type IfNotAnyOrNever<T, Then, Else>: IfAnyOrNever_Not<T, Then, Else>;
```

Test a type against not `any` or `never`
[IfAnyOrNever_Not](IfAnyOrNever_Not.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to test against `any` or `never` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfAnyOrNever.d.ts:36](https://github.com/sylvaindethier/typescript-utils/blob/8e5403ef6aee7077fe4c3a20af320ab84f9dedde/types/primitives/IfAnyOrNever.d.ts#L36)
