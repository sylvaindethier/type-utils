[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNot

# Type alias: IfNot\<B, Then, Else, Error\>

```ts
type IfNot<B, Then, Else, Error>: If<B, Else, Then, Error>;
```

Test a `boolean` to be `false`

## Type parameters

• **B** *extends* `boolean`

The `boolean` to test against `false`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

• **Error** = `never`

The type to return in case the boolean is not literal

## Source

[logic/If.d.ts:23](https://github.com/sylvaindethier/typescript-utils/blob/da053667786f5d5e5c1616510ec7f7cc66f058b4/types/logic/If.d.ts#L23)
