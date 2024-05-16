[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNeverOrAny

# Type alias: IfNeverOrAny\<T, Then, Else\>

```ts
type IfNeverOrAny<T, Then, Else>: IfAnyOrNever<T, Then, Else>;
```

Test a type against `any` or `never`
[IfAnyOrNever](IfAnyOrNever.md)

## Type parameters

• **T**

The type to test against `any` or `never`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfAnyOrNever.d.ts:19](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/primitives/IfAnyOrNever.d.ts#L19)
