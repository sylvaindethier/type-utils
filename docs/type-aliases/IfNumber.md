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

[primitives/IfNumber.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/da053667786f5d5e5c1616510ec7f7cc66f058b4/types/primitives/IfNumber.d.ts#L9)
