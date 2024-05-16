[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfAnyOrNever\_Not

# Type alias: IfAnyOrNever\_Not\<T, Then, Else\>

```ts
type IfAnyOrNever_Not<T, Then, Else>: IfAnyOrNever<T, Else, Then>;
```

Test a type against not `any` or `never`

## Type parameters

• **T**

The type to test against not `any` or `never`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfAnyOrNever.d.ts:27](https://github.com/sylvaindethier/typescript-utils/blob/254cb70e64a181b28a83233c8f5f88b54fc4d037/types/primitives/IfAnyOrNever.d.ts#L27)
