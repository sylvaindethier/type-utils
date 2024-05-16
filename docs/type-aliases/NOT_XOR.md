[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / NOT\_XOR

# Type alias: NOT\_XOR\<X, Y, E\>

```ts
type NOT_XOR<X, Y, E>: NOT<XOR<X, Y>, E>;
```

Logical NOT_XOR operator

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The X boolean to perform the operation |
| `Y` *extends* `boolean` | - | The Y boolean to perform the operation |
| `E` | `never` | The type to return in case any of the boolean is not literal |

## Source

[logic/operators/EQV.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/a4617fb26232a8a136e0ffe6a2534b634ac803e6/types/logic/operators/EQV.d.ts#L9)
