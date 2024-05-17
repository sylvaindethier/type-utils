[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / NOT

# Type alias: NOT\<X, E\>

```ts
type NOT<X, E>: If<X, false, true, E>;
```

Logical NOT operator

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The boolean to perform the negation on |
| `E` | `never` | The type to return in case the boolean is not literal |

## Source

[logic/operators/NOT.d.ts:8](https://github.com/sylvaindethier/typescript-utils/blob/f271884d3138386b859e820c285b0ab8864227bb/types/logic/operators/NOT.d.ts#L8)
