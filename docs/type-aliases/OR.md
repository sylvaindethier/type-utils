[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / OR

# Type alias: OR\<X, Y, Error\>

```ts
type OR<X, Y, Error>: If<X, true, If<Y>, Error>;
```

Logical OR operator

## Type parameters

• **X** *extends* `boolean`

The X boolean to perform the disjunction

• **Y** *extends* `boolean`

The Y boolean to perform the disjunction

• **Error** = `never`

The type to return in case any of the boolean is not literal

## Source

[logic/operators/OR.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/da053667786f5d5e5c1616510ec7f7cc66f058b4/types/logic/operators/OR.d.ts#L9)
