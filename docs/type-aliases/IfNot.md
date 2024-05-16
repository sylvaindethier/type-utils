[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNot

# Type alias: IfNot\<B, Then, Else, Error\>

```ts
type IfNot<B, Then, Else, Error>: If<B, Else, Then, Error>;
```

Test a `boolean` to be `false`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `B` *extends* `boolean` | - | The `boolean` to test against `false` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |
| `Error` | `never` | The type to return in case the boolean is not literal |

## Source

[logic/If.d.ts:23](https://github.com/sylvaindethier/typescript-utils/blob/a4617fb26232a8a136e0ffe6a2534b634ac803e6/types/logic/If.d.ts#L23)
