[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfBoolean

# Type alias: IfBoolean\<T, Then, Else\>

```ts
type IfBoolean<T, Then, Else>: IfNotAnyOrNever<T, T extends boolean ? Then : Else, Else>;
```

Test a type against `boolean`

## Type parameters

• **T**

The type to test against `boolean`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfBoolean.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/primitives/IfBoolean.d.ts#L9)
