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

[logic/operators/IMP.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/logic/operators/IMP.d.ts#L9)
