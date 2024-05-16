[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNumber

# Type alias: IfNumber\<T, Then, Else\>

```ts
type IfNumber<T, Then, Else>: IfNotAnyOrNever<T, T extends number ? Then : Else, Else>;
```

Test a type against `number`

## Type parameters

• **T**

The type to be tested against `number`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfNumber.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/primitives/IfNumber.d.ts#L9)
