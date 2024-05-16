[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfBooleanLiteral

# Type alias: IfBooleanLiteral\<V, Then, Else\>

```ts
type IfBooleanLiteral<V, Then, Else>: IfBoolean<V, boolean extends V ? Else : Then, Else>;
```

Test a `boolean` to be literal, whether `true` or `false`

## Type parameters

• **V** *extends* `boolean`

The boolean to test against `boolean` literal

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfBoolean.d.ts:21](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/primitives/IfBoolean.d.ts#L21)
