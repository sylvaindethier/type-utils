[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfStringLiteral

# Type alias: IfStringLiteral\<V, Then, Else\>

```ts
type IfStringLiteral<V, Then, Else>: IfString<V, string extends V ? Else : Then, Else>;
```

Test a `string` to be literal

## Type parameters

• **V** *extends* `string`

The bigint type to be tested against `bigint` literal

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfString.d.ts:21](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/primitives/IfString.d.ts#L21)
