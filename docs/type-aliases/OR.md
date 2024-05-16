[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / OR

# Type alias: OR\<X, Y, Error\>

```ts
type OR<X, Y, Error>: If<X, true, If<Y>, Error>;
```

Logical OR operator

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The X boolean to perform the disjunction |
| `Y` *extends* `boolean` | - | The Y boolean to perform the disjunction |
| `Error` | `never` | The type to return in case any of the boolean is not literal |

## Source

[logic/operators/OR.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/c2db051f7ef7ff24cba2e92cfd5e891000492922/types/logic/operators/OR.d.ts#L9)
