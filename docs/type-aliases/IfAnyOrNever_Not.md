[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfAnyOrNever\_Not

# Type alias: IfAnyOrNever\_Not\<T, Then, Else\>

```ts
type IfAnyOrNever_Not<T, Then, Else>: IfAnyOrNever<T, Else, Then>;
```

Test a type against not `any` or `never`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to test against not `any` or `never` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfAnyOrNever.d.ts:27](https://github.com/sylvaindethier/typescript-utils/blob/a4617fb26232a8a136e0ffe6a2534b634ac803e6/types/primitives/IfAnyOrNever.d.ts#L27)
