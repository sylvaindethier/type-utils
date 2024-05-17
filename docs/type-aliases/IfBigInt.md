[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfBigInt

# Type alias: IfBigInt\<T, Then, Else\>

```ts
type IfBigInt<T, Then, Else>: IfNotAnyOrNever<T, T extends bigint ? Then : Else, Else>;
```

Test a type against `bigint`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to be tested against `bigint` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfBigInt.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/421887de13b8684fe14792f125c2cd5fdb322c0d/types/primitives/IfBigInt.d.ts#L9)
