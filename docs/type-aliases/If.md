[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / If

# Type alias: If\<B, Then, Else, Error\>

```ts
type If<B, Then, Else, Error>: IfBooleanLiteral<B, true extends B ? Then : Else, Error>;
```

Test a `boolean` against to be `true`

## Type parameters

• **B** *extends* `boolean`

The `boolean` to test against `true`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

• **Error** = `never`

The type to return in case the boolean is not literal

## Source

[logic/If.d.ts:10](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/logic/If.d.ts#L10)
