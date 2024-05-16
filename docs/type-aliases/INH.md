[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / INH

# Type alias: INH\<X, Y, E\>

```ts
type INH<X, Y, E>: PRODUCT<X, NOT<Y>, E>;
```

Logical INH operator

## Type parameters

• **X** *extends* `boolean`

The X boolean to perform the operation

• **Y** *extends* `boolean`

The Y boolean to perform the operation

• **E** = `never`

The type to return in case any of the boolean is not literal

## Source

[logic/operators/INH.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/da053667786f5d5e5c1616510ec7f7cc66f058b4/types/logic/operators/INH.d.ts#L9)
