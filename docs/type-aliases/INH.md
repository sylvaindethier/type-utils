[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / INH

# Type alias: INH\<X, Y, Error\>

```ts
type INH<X, Y, Error>: PRODUCT<X, NOT<Y>, Error>;
```

Logical INH operator

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The X boolean to perform the operation |
| `Y` *extends* `boolean` | - | The Y boolean to perform the operation |
| `Error` | `never` | The type to return in case any of the boolean is not literal |

## Source

[logic/operators/INH.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/83679697f5d7fa0b2956157cf34be5813a5e5434/types/logic/operators/INH.d.ts#L9)
