[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / AND

# Type alias: AND\<X, Y, Error\>

```ts
type AND<X, Y, Error>: If<X, If<Y>, false, Error>;
```

Logical AND operator

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The X boolean to perform the conjunction |
| `Y` *extends* `boolean` | - | The Y boolean to perform the conjunction |
| `Error` | `never` | The type to return in case any of the boolean is not literal |

## Source

[logic/operators/AND.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/c2db051f7ef7ff24cba2e92cfd5e891000492922/types/logic/operators/AND.d.ts#L9)
