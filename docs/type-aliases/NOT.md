[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / NOT

# Type alias: NOT\<X, E\>

```ts
type NOT<X, E>: If<X, false, true, E>;
```

Logical NOT operator

## Type parameters

• **X** *extends* `boolean`

The boolean to perform the negation on

• **E** = `never`

The type to return in case the boolean is not literal

## Source

[logic/operators/NOT.d.ts:8](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/logic/operators/NOT.d.ts#L8)
