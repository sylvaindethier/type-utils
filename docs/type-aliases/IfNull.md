[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNull

# Type alias: IfNull\<T, Then, Else\>

```ts
type IfNull<T, Then, Else>: IfNotAnyOrNever<T, T extends null ? Then : Else, Else>;
```

Test a type against `null`

## Type parameters

• **T**

The type to be tested against `null`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfNull.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/primitives/IfNull.d.ts#L9)
