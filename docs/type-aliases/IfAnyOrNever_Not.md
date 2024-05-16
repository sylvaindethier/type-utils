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

[primitives/IfAnyOrNever.d.ts:27](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/primitives/IfAnyOrNever.d.ts#L27)
