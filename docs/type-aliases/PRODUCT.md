[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / PRODUCT

# Type alias: PRODUCT\<X, Y, Error\>

```ts
type PRODUCT<X, Y, Error>: AND<X, Y, Error>;
```

Logical PRODUCT (= AND) operator
[AND](AND.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The X boolean to perform the conjunction |
| `Y` *extends* `boolean` | - | The Y boolean to perform the conjunction |
| `Error` | `never` | The type to return in case any of the boolean is not literal |

## Source

[logic/operators/AND.d.ts:26](https://github.com/sylvaindethier/typescript-utils/blob/b4bd497afc46fe47c24db22965f824eb3fdda8ec/types/logic/operators/AND.d.ts#L26)
