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

[logic/operators/NOT.d.ts:8](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/logic/operators/NOT.d.ts#L8)
