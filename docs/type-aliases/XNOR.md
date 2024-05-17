[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / XNOR

# Type alias: XNOR\<X, Y, Error\>

```ts
type XNOR<X, Y, Error>: NOT_XOR<X, Y, Error>;
```

Logical XNOR operator
[NOT_XOR](NOT_XOR.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The X boolean to perform the operation |
| `Y` *extends* `boolean` | - | The Y boolean to perform the operation |
| `Error` | `never` | The type to return in case any of the boolean is not literal |

## Source

[logic/operators/EQV.d.ts:18](https://github.com/sylvaindethier/typescript-utils/blob/fc923b9b8f624519a4e708a123084592ab3d1c55/types/logic/operators/EQV.d.ts#L18)
