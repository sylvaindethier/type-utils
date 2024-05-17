[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / SUM

# Type alias: SUM\<X, Y, Error\>

```ts
type SUM<X, Y, Error>: OR<X, Y, Error>;
```

Logical SUM (= OR) operator
[OR](OR.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The X boolean to perform the disjunction |
| `Y` *extends* `boolean` | - | The Y boolean to perform the disjunction |
| `Error` | `never` | The type to return in case any of the boolean is not literal |

## Source

[logic/operators/OR.d.ts:26](https://github.com/sylvaindethier/typescript-utils/blob/f271884d3138386b859e820c285b0ab8864227bb/types/logic/operators/OR.d.ts#L26)
