[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfString

# Type alias: IfString\<T, Then, Else\>

```ts
type IfString<T, Then, Else>: IfNotAnyOrNever<T, T extends string ? Then : Else, Else>;
```

Test a type against `string`

## Type parameters

• **T**

The type to be tested against `string`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfString.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/primitives/IfString.d.ts#L9)
