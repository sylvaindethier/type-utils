[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfSymbol

# Type alias: IfSymbol\<T, Then, Else\>

```ts
type IfSymbol<T, Then, Else>: IfNotAnyOrNever<T, T extends symbol ? Then : Else, Else>;
```

Test a type against `symbol`

## Type parameters

• **T**

The type to be tested against `symbol`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfSymbol.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/primitives/IfSymbol.d.ts#L9)
