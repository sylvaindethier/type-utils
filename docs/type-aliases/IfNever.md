[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNever

# Type alias: IfNever\<T, Then, Else\>

```ts
type IfNever<T, Then, Else>: [T] extends [never] ? Then : Else;
```

Test a type against `never`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to test against `never` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfNever.d.ts:7](https://github.com/sylvaindethier/typescript-utils/blob/421887de13b8684fe14792f125c2cd5fdb322c0d/types/primitives/IfNever.d.ts#L7)
