---
id: "utils_src_reactHelpers"
title: "Module: utils/src/reactHelpers"
sidebar_label: "utils/src/reactHelpers"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### DOMTagToElement

Ƭ **DOMTagToElement**<`ElementKind`\>: [`ExtractElement`](utils_src_reactHelpers.md#extractelement)<`JSX.IntrinsicElements`[`ElementKind`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementKind` | extends keyof `JSX.IntrinsicElements` |

#### Defined in

[packages/utils/src/reactHelpers.ts:30](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/reactHelpers.ts#L30)

___

### ExtractElement

Ƭ **ExtractElement**<`T`\>: `T` extends `React.DetailedHTMLProps`<`HTMLAttributes`<`any`\>, infer E\> ? `E` : `T` extends `React.SVGProps`<infer E\> ? `E` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/utils/src/reactHelpers.ts:13](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/reactHelpers.ts#L13)

___

### WithElementAttrs

Ƭ **WithElementAttrs**<`ElementKind`\>: `Omit`<`JSX.IntrinsicElements`[`ElementKind`], ``"ref"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementKind` | extends keyof `JSX.IntrinsicElements` |

#### Defined in

[packages/utils/src/reactHelpers.ts:23](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/reactHelpers.ts#L23)

___

### WrappedComponent

Ƭ **WrappedComponent**<`Props`, `ElementKind`\>: `CreateStyledComponent`<`ForwardRefExoticComponent`<`Props` & [`WithElementAttrs`](utils_src_reactHelpers.md#withelementattrs)<`ElementKind`\> & `RefAttributes`<[`DOMTagToElement`](utils_src_reactHelpers.md#domtagtoelement)<`ElementKind`\>\>\>, `Props`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends `Object` |
| `ElementKind` | extends keyof `JSX.IntrinsicElements` |

#### Defined in

[packages/utils/src/reactHelpers.ts:32](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/reactHelpers.ts#L32)

## Functions

### decorateName

▸ **decorateName**<`F`, `P`\>(`Component`, `name?`): `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `StyledComponent`<`P`, {}, {}, `F`\> |
| `P` | `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `F` |
| `name?` | `string` |

#### Returns

`F`

#### Defined in

[packages/utils/src/reactHelpers.ts:43](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/reactHelpers.ts#L43)

___

### dualRefs

▸ **dualRefs**<`E`\>(`targetA?`, `targetB?`): (`incomingRefValue`: ``null`` \| `E`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetA?` | `ForwardedRef`<``null`` \| `E`\> |
| `targetB?` | `ForwardedRef`<``null`` \| `E`\> |

#### Returns

`fn`

▸ (`incomingRefValue`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `incomingRefValue` | ``null`` \| `E` |

##### Returns

`void`

#### Defined in

[packages/utils/src/reactHelpers.ts:69](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/reactHelpers.ts#L69)

___

### wrap

▸ **wrap**<`Props`, `ElementKind`\>(`component`, `name?`): `StyledComponent`<`PropsWithoutRef`<`Props`\> & `RefAttributes`<[`ExtractElement`](utils_src_reactHelpers.md#extractelement)<`IntrinsicElements`[`ElementKind`]\>\> & { `theme?`: `Theme`  }, {}, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends `Object` |
| `ElementKind` | extends keyof `IntrinsicElements` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `ForwardRefRenderFunction`<[`ExtractElement`](utils_src_reactHelpers.md#extractelement)<`IntrinsicElements`[`ElementKind`]\>, `Props`\> |
| `name?` | `string` |

#### Returns

`StyledComponent`<`PropsWithoutRef`<`Props`\> & `RefAttributes`<[`ExtractElement`](utils_src_reactHelpers.md#extractelement)<`IntrinsicElements`[`ElementKind`]\>\> & { `theme?`: `Theme`  }, {}, {}\>

#### Defined in

[packages/utils/src/reactHelpers.ts:53](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/reactHelpers.ts#L53)
