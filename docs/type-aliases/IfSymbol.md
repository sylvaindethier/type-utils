[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfSymbol

# Type alias: IfSymbol\<T, Then, Else\>

```ts
type IfSymbol<T, Then, Else>: IfNotAnyOrNever<T, T extends symbol ? Then : Else, Else>;
```

Test a type against `symbol`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to be tested against `symbol` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfSymbol.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/83679697f5d7fa0b2956157cf34be5813a5e5434/types/primitives/IfSymbol.d.ts#L9)
