[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / XOR

# Type alias: XOR\<X, Y, E\>

```ts
type XOR<X, Y, E>: PRODUCT<SUM<X, Y>, NOT<PRODUCT<X, Y>>, E>;
```

Logical XOR operator

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The X boolean to perform the operation |
| `Y` *extends* `boolean` | - | The Y boolean to perform the operation |
| `E` | `never` | The type to return in case any of the boolean is not literal |

## Source

[logic/operators/XOR.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/c2db051f7ef7ff24cba2e92cfd5e891000492922/types/logic/operators/XOR.d.ts#L9)
