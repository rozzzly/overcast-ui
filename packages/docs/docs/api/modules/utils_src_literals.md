---
id: "utils_src_literals"
title: "Module: utils/src/literals"
sidebar_label: "utils/src/literals"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### Key

Ƭ **Key**: `number` \| `string` \| `symbol`

#### Defined in

[packages/utils/src/literals.ts:2](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/literals.ts#L2)

___

### LiteralsToUnion

Ƭ **LiteralsToUnion**<`T`\>: `T` extends `ReadonlyArray`<infer Literal\> ? `Literal` : `T` extends {} ? keyof `T` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/utils/src/literals.ts:23](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/literals.ts#L23)

## Functions

### literalsToEnum

▸ **literalsToEnum**<`T`\>(...`args`): { [K in Key]: K }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Key`](utils_src_literals.md#key) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T`[] |

#### Returns

{ [K in Key]: K }

#### Defined in

[packages/utils/src/literals.ts:12](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/literals.ts#L12)

___

### literalsToList

▸ **literalsToList**<`T`\>(...`args`): `T`[]

**`See`**

https://github.com/Microsoft/TypeScript/issues/28046

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Key`](utils_src_literals.md#key) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T`[] |

#### Returns

`T`[]

#### Defined in

[packages/utils/src/literals.ts:11](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/utils/src/literals.ts#L11)
