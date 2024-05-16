[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IMP

# Type alias: IMP\<X, Y, E\>

```ts
type IMP<X, Y, E>: SUM<NOT<X>, Y, E>;
```

Logical IMP operator

## Type parameters

• **X** *extends* `boolean`

The X boolean to perform the operation

• **Y** *extends* `boolean`

The Y boolean to perform the operation

• **E** = `never`

The type to return in case any of the boolean is not literal

## Source

[logic/operators/IMP.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/da053667786f5d5e5c1616510ec7f7cc66f058b4/types/logic/operators/IMP.d.ts#L9)
