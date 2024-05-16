[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / XOR

# Type alias: XOR\<X, Y, E\>

```ts
type XOR<X, Y, E>: PRODUCT<SUM<X, Y>, NOT<PRODUCT<X, Y>>, E>;
```

Logical XOR operator

## Type parameters

• **X** *extends* `boolean`

The X boolean to perform the operation

• **Y** *extends* `boolean`

The Y boolean to perform the operation

• **E** = `never`

The type to return in case any of the boolean is not literal

## Source

[logic/operators/XOR.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/logic/operators/XOR.d.ts#L9)
