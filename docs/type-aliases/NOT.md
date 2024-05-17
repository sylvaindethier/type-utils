[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / NOT

# Type alias: NOT\<X, Error\>

```ts
type NOT<X, Error>: If<X, false, true, Error>;
```

Logical NOT operator

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The boolean to perform the negation on |
| `Error` | `never` | The type to return in case the boolean is not literal |

## Source

[logic/operators/NOT.d.ts:8](https://github.com/sylvaindethier/typescript-utils/blob/421887de13b8684fe14792f125c2cd5fdb322c0d/types/logic/operators/NOT.d.ts#L8)
