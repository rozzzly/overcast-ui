---
id: "core_src_TextInput_containers"
title: "Module: core/src/TextInput/containers"
sidebar_label: "core/src/TextInput/containers"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [TextInputContainerProps](../interfaces/core_src_TextInput_containers.TextInputContainerProps.md)

## Functions

### IconContainer

▸ **IconContainer**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | { `as?`: `ElementType`<`any`\> ; `theme?`: `Theme`  } & { `intent?`: ``"normal"`` \| ``"success"`` \| ``"danger"`` \| ``"warning"`` \| ``"primary"``  } & `ClassAttributes`<`HTMLSpanElement`\> & `HTMLAttributes`<`HTMLSpanElement`\> |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

___

### TextInputContainer

▸ **TextInputContainer**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | { `as?`: `ElementType`<`any`\> ; `theme?`: `Theme`  } & [`TextInputContainerProps`](../interfaces/core_src_TextInput_containers.TextInputContainerProps.md) & `ClassAttributes`<`HTMLDivElement`\> & `HTMLAttributes`<`HTMLDivElement`\> |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

___

### inputShadow

▸ **inputShadow**(`color`, `isFocused`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `isFocused` | `boolean` |

#### Returns

`string`

#### Defined in

[packages/core/src/TextInput/containers.tsx:43](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/core/src/TextInput/containers.tsx#L43)
