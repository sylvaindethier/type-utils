[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfUndefined

# Type alias: IfUndefined\<T, Then, Else\>

```ts
type IfUndefined<T, Then, Else>: IfNotAnyOrNever<T, T extends undefined ? Then : Else, Else>;
```

Test a type against `undefined`

## Type parameters

• **T**

The type to be tested against `undefined`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfUndefined.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/primitives/IfUndefined.d.ts#L9)
