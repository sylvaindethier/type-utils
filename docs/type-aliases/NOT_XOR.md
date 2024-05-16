[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / NOT\_XOR

# Type alias: NOT\_XOR\<X, Y, E\>

```ts
type NOT_XOR<X, Y, E>: NOT<XOR<X, Y>, E>;
```

Logical NOT_XOR operator

## Type parameters

• **X** *extends* `boolean`

The X boolean to perform the operation

• **Y** *extends* `boolean`

The Y boolean to perform the operation

• **E** = `never`

The type to return in case any of the boolean is not literal

## Source

[logic/operators/EQV.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/da053667786f5d5e5c1616510ec7f7cc66f058b4/types/logic/operators/EQV.d.ts#L9)
