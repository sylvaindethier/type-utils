[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfUnknown

# Type alias: IfUnknown\<T, Then, Else\>

```ts
type IfUnknown<T, Then, Else>: IfAny<T, Else, unknown extends T ? Then : Else>;
```

Test a type again `unknown`

## Type parameters

• **T**

The type to test against `unknown`

• **Then** = `true`

The type to return in case the condition is true

• **Else** = `false`

The type to return in case the condition is false

## Source

[primitives/IfUnknown.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/ab419bb948144c4ff1d3d3505b7f2f1b468a22c9/types/primitives/IfUnknown.d.ts#L9)
