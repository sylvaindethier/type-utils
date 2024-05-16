[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNeverOrAny

# Type alias: IfNeverOrAny\<T, Then, Else\>

```ts
type IfNeverOrAny<T, Then, Else>: IfAnyOrNever<T, Then, Else>;
```

Test a type against `any` or `never`
[IfAnyOrNever](IfAnyOrNever.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to test against `any` or `never` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfAnyOrNever.d.ts:19](https://github.com/sylvaindethier/typescript-utils/blob/c2db051f7ef7ff24cba2e92cfd5e891000492922/types/primitives/IfAnyOrNever.d.ts#L19)
