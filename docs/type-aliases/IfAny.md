[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfAny

# Type alias: IfAny\<T, Then, Else\>

```ts
type IfAny<T, Then, Else>: 0 extends 1 & T ? Then : Else;
```

Test a type against `any`

## Type parameters

• **T**

The type to test against `any`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfAny.d.ts:7](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/primitives/IfAny.d.ts#L7)
