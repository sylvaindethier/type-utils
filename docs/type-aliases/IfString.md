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

[primitives/IfString.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/primitives/IfString.d.ts#L9)
