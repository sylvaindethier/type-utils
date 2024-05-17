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

[primitives/IfAnyOrNever.d.ts:10](https://github.com/sylvaindethier/typescript-utils/blob/83679697f5d7fa0b2956157cf34be5813a5e5434/types/primitives/IfAnyOrNever.d.ts#L10)
