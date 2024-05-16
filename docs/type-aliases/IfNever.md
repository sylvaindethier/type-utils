[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNever

# Type alias: IfNever\<T, Then, Else\>

```ts
type IfNever<T, Then, Else>: [T] extends [never] ? Then : Else;
```

Test a type against `never`

## Type parameters

• **T**

The type to test against `never`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfNever.d.ts:7](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/primitives/IfNever.d.ts#L7)
