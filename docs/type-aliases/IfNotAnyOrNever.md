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

[primitives/IfAnyOrNever.d.ts:36](https://github.com/sylvaindethier/typescript-utils/blob/c2db051f7ef7ff24cba2e92cfd5e891000492922/types/primitives/IfAnyOrNever.d.ts#L36)
