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

[logic/operators/AND.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/f271884d3138386b859e820c285b0ab8864227bb/types/logic/operators/AND.d.ts#L9)
