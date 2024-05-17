[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / XOR

# Type alias: XOR\<X, Y, Error\>

```ts
type XOR<X, Y, Error>: PRODUCT<SUM<X, Y>, NOT<PRODUCT<X, Y>>, Error>;
```

Logical XOR operator

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The X boolean to perform the operation |
| `Y` *extends* `boolean` | - | The Y boolean to perform the operation |
| `Error` | `never` | The type to return in case any of the boolean is not literal |

## Source

[logic/operators/XOR.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/421887de13b8684fe14792f125c2cd5fdb322c0d/types/logic/operators/XOR.d.ts#L9)
