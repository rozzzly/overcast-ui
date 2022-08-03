---
id: "core_src_TextInput.TextInputProps"
title: "Interface: TextInputProps"
sidebar_label: "core/src/TextInput.TextInputProps"
custom_edit_url: null
---

[core/src/TextInput](../modules/core_src_TextInput.md).TextInputProps

## Hierarchy

- [`WithElementAttrs`](../modules/utils_src_reactHelpers.md#withelementattrs)<``"input"``\>

- [`WithIntent`](theme_src_colors.WithIntent.md)

  ↳ **`TextInputProps`**

## Properties

### about

• `Optional` **about**: `string`

#### Inherited from

WithElementAttrs.about

#### Defined in

node_modules/@types/react/index.d.ts:1876

___

### accept

• `Optional` **accept**: `string`

#### Inherited from

WithElementAttrs.accept

#### Defined in

node_modules/@types/react/index.d.ts:2220

___

### accessKey

• `Optional` **accessKey**: `string`

#### Inherited from

WithElementAttrs.accessKey

#### Defined in

node_modules/@types/react/index.d.ts:1852

___

### alt

• `Optional` **alt**: `string`

#### Inherited from

WithElementAttrs.alt

#### Defined in

node_modules/@types/react/index.d.ts:2221

___

### aria-activedescendant

• `Optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

WithElementAttrs.aria-activedescendant

#### Defined in

node_modules/@types/react/index.d.ts:1586

___

### aria-atomic

• `Optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

WithElementAttrs.aria-atomic

#### Defined in

node_modules/@types/react/index.d.ts:1588

___

### aria-autocomplete

• `Optional` **aria-autocomplete**: ``"inline"`` \| ``"both"`` \| ``"none"`` \| ``"list"``

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

WithElementAttrs.aria-autocomplete

#### Defined in

node_modules/@types/react/index.d.ts:1593

___

### aria-busy

• `Optional` **aria-busy**: `Booleanish`

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

WithElementAttrs.aria-busy

#### Defined in

node_modules/@types/react/index.d.ts:1595

___

### aria-checked

• `Optional` **aria-checked**: `boolean` \| ``"mixed"`` \| ``"false"`` \| ``"true"``

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

**`See`**

 - aria-pressed
 - aria-selected.

#### Inherited from

WithElementAttrs.aria-checked

#### Defined in

node_modules/@types/react/index.d.ts:1600

___

### aria-colcount

• `Optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

**`See`**

aria-colindex.

#### Inherited from

WithElementAttrs.aria-colcount

#### Defined in

node_modules/@types/react/index.d.ts:1605

___

### aria-colindex

• `Optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

**`See`**

 - aria-colcount
 - aria-colspan.

#### Inherited from

WithElementAttrs.aria-colindex

#### Defined in

node_modules/@types/react/index.d.ts:1610

___

### aria-colspan

• `Optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

**`See`**

 - aria-colindex
 - aria-rowspan.

#### Inherited from

WithElementAttrs.aria-colspan

#### Defined in

node_modules/@types/react/index.d.ts:1615

___

### aria-controls

• `Optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**`See`**

aria-owns.

#### Inherited from

WithElementAttrs.aria-controls

#### Defined in

node_modules/@types/react/index.d.ts:1620

___

### aria-current

• `Optional` **aria-current**: `boolean` \| ``"location"`` \| ``"time"`` \| ``"false"`` \| ``"page"`` \| ``"true"`` \| ``"step"`` \| ``"date"``

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

WithElementAttrs.aria-current

#### Defined in

node_modules/@types/react/index.d.ts:1622

___

### aria-describedby

• `Optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

**`See`**

aria-labelledby

#### Inherited from

WithElementAttrs.aria-describedby

#### Defined in

node_modules/@types/react/index.d.ts:1627

___

### aria-details

• `Optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

**`See`**

aria-describedby.

#### Inherited from

WithElementAttrs.aria-details

#### Defined in

node_modules/@types/react/index.d.ts:1632

___

### aria-disabled

• `Optional` **aria-disabled**: `Booleanish`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

**`See`**

 - aria-hidden
 - aria-readonly.

#### Inherited from

WithElementAttrs.aria-disabled

#### Defined in

node_modules/@types/react/index.d.ts:1637

___

### aria-dropeffect

• `Optional` **aria-dropeffect**: ``"link"`` \| ``"none"`` \| ``"copy"`` \| ``"move"`` \| ``"execute"`` \| ``"popup"``

Indicates what functions can be performed when a dragged object is released on the drop target.

**`Deprecated`**

in ARIA 1.1

#### Inherited from

WithElementAttrs.aria-dropeffect

#### Defined in

node_modules/@types/react/index.d.ts:1642

___

### aria-errormessage

• `Optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

**`See`**

 - aria-invalid
 - aria-describedby.

#### Inherited from

WithElementAttrs.aria-errormessage

#### Defined in

node_modules/@types/react/index.d.ts:1647

___

### aria-expanded

• `Optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

WithElementAttrs.aria-expanded

#### Defined in

node_modules/@types/react/index.d.ts:1649

___

### aria-flowto

• `Optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

WithElementAttrs.aria-flowto

#### Defined in

node_modules/@types/react/index.d.ts:1654

___

### aria-grabbed

• `Optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

**`Deprecated`**

in ARIA 1.1

#### Inherited from

WithElementAttrs.aria-grabbed

#### Defined in

node_modules/@types/react/index.d.ts:1659

___

### aria-haspopup

• `Optional` **aria-haspopup**: `boolean` \| ``"grid"`` \| ``"dialog"`` \| ``"menu"`` \| ``"false"`` \| ``"listbox"`` \| ``"true"`` \| ``"tree"``

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

WithElementAttrs.aria-haspopup

#### Defined in

node_modules/@types/react/index.d.ts:1661

___

### aria-hidden

• `Optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

**`See`**

aria-disabled.

#### Inherited from

WithElementAttrs.aria-hidden

#### Defined in

node_modules/@types/react/index.d.ts:1666

___

### aria-invalid

• `Optional` **aria-invalid**: `boolean` \| ``"false"`` \| ``"true"`` \| ``"grammar"`` \| ``"spelling"``

Indicates the entered value does not conform to the format expected by the application.

**`See`**

aria-errormessage.

#### Inherited from

WithElementAttrs.aria-invalid

#### Defined in

node_modules/@types/react/index.d.ts:1671

___

### aria-keyshortcuts

• `Optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

WithElementAttrs.aria-keyshortcuts

#### Defined in

node_modules/@types/react/index.d.ts:1673

___

### aria-label

• `Optional` **aria-label**: `string`

Defines a string value that labels the current element.

**`See`**

aria-labelledby.

#### Inherited from

WithElementAttrs.aria-label

#### Defined in

node_modules/@types/react/index.d.ts:1678

___

### aria-labelledby

• `Optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

**`See`**

aria-describedby.

#### Inherited from

WithElementAttrs.aria-labelledby

#### Defined in

node_modules/@types/react/index.d.ts:1683

___

### aria-level

• `Optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

WithElementAttrs.aria-level

#### Defined in

node_modules/@types/react/index.d.ts:1685

___

### aria-live

• `Optional` **aria-live**: ``"off"`` \| ``"assertive"`` \| ``"polite"``

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

WithElementAttrs.aria-live

#### Defined in

node_modules/@types/react/index.d.ts:1687

___

### aria-modal

• `Optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

WithElementAttrs.aria-modal

#### Defined in

node_modules/@types/react/index.d.ts:1689

___

### aria-multiline

• `Optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

WithElementAttrs.aria-multiline

#### Defined in

node_modules/@types/react/index.d.ts:1691

___

### aria-multiselectable

• `Optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

WithElementAttrs.aria-multiselectable

#### Defined in

node_modules/@types/react/index.d.ts:1693

___

### aria-orientation

• `Optional` **aria-orientation**: ``"horizontal"`` \| ``"vertical"``

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

WithElementAttrs.aria-orientation

#### Defined in

node_modules/@types/react/index.d.ts:1695

___

### aria-owns

• `Optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

**`See`**

aria-controls.

#### Inherited from

WithElementAttrs.aria-owns

#### Defined in

node_modules/@types/react/index.d.ts:1701

___

### aria-placeholder

• `Optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

WithElementAttrs.aria-placeholder

#### Defined in

node_modules/@types/react/index.d.ts:1706

___

### aria-posinset

• `Optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`See`**

aria-setsize.

#### Inherited from

WithElementAttrs.aria-posinset

#### Defined in

node_modules/@types/react/index.d.ts:1711

___

### aria-pressed

• `Optional` **aria-pressed**: `boolean` \| ``"mixed"`` \| ``"false"`` \| ``"true"``

Indicates the current "pressed" state of toggle buttons.

**`See`**

 - aria-checked
 - aria-selected.

#### Inherited from

WithElementAttrs.aria-pressed

#### Defined in

node_modules/@types/react/index.d.ts:1716

___

### aria-readonly

• `Optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

**`See`**

aria-disabled.

#### Inherited from

WithElementAttrs.aria-readonly

#### Defined in

node_modules/@types/react/index.d.ts:1721

___

### aria-relevant

• `Optional` **aria-relevant**: ``"all"`` \| ``"text"`` \| ``"additions"`` \| ``"additions removals"`` \| ``"additions text"`` \| ``"removals"`` \| ``"removals additions"`` \| ``"removals text"`` \| ``"text additions"`` \| ``"text removals"``

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**`See`**

aria-atomic.

#### Inherited from

WithElementAttrs.aria-relevant

#### Defined in

node_modules/@types/react/index.d.ts:1726

___

### aria-required

• `Optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

WithElementAttrs.aria-required

#### Defined in

node_modules/@types/react/index.d.ts:1728

___

### aria-roledescription

• `Optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

WithElementAttrs.aria-roledescription

#### Defined in

node_modules/@types/react/index.d.ts:1730

___

### aria-rowcount

• `Optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

**`See`**

aria-rowindex.

#### Inherited from

WithElementAttrs.aria-rowcount

#### Defined in

node_modules/@types/react/index.d.ts:1735

___

### aria-rowindex

• `Optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

**`See`**

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

WithElementAttrs.aria-rowindex

#### Defined in

node_modules/@types/react/index.d.ts:1740

___

### aria-rowspan

• `Optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

**`See`**

 - aria-rowindex
 - aria-colspan.

#### Inherited from

WithElementAttrs.aria-rowspan

#### Defined in

node_modules/@types/react/index.d.ts:1745

___

### aria-selected

• `Optional` **aria-selected**: `Booleanish`

Indicates the current "selected" state of various widgets.

**`See`**

 - aria-checked
 - aria-pressed.

#### Inherited from

WithElementAttrs.aria-selected

#### Defined in

node_modules/@types/react/index.d.ts:1750

___

### aria-setsize

• `Optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`See`**

aria-posinset.

#### Inherited from

WithElementAttrs.aria-setsize

#### Defined in

node_modules/@types/react/index.d.ts:1755

___

### aria-sort

• `Optional` **aria-sort**: ``"none"`` \| ``"other"`` \| ``"ascending"`` \| ``"descending"``

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

WithElementAttrs.aria-sort

#### Defined in

node_modules/@types/react/index.d.ts:1757

___

### aria-valuemax

• `Optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

WithElementAttrs.aria-valuemax

#### Defined in

node_modules/@types/react/index.d.ts:1759

___

### aria-valuemin

• `Optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

WithElementAttrs.aria-valuemin

#### Defined in

node_modules/@types/react/index.d.ts:1761

___

### aria-valuenow

• `Optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

**`See`**

aria-valuetext.

#### Inherited from

WithElementAttrs.aria-valuenow

#### Defined in

node_modules/@types/react/index.d.ts:1766

___

### aria-valuetext

• `Optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

WithElementAttrs.aria-valuetext

#### Defined in

node_modules/@types/react/index.d.ts:1768

___

### autoCapitalize

• `Optional` **autoCapitalize**: `string`

#### Inherited from

WithElementAttrs.autoCapitalize

#### Defined in

node_modules/@types/react/index.d.ts:1886

___

### autoComplete

• `Optional` **autoComplete**: `string`

#### Inherited from

WithElementAttrs.autoComplete

#### Defined in

node_modules/@types/react/index.d.ts:2222

___

### autoCorrect

• `Optional` **autoCorrect**: `string`

#### Inherited from

WithElementAttrs.autoCorrect

#### Defined in

node_modules/@types/react/index.d.ts:1887

___

### autoFocus

• `Optional` **autoFocus**: `boolean`

#### Inherited from

WithElementAttrs.autoFocus

#### Defined in

node_modules/@types/react/index.d.ts:2223

___

### autoSave

• `Optional` **autoSave**: `string`

#### Inherited from

WithElementAttrs.autoSave

#### Defined in

node_modules/@types/react/index.d.ts:1888

___

### capture

• `Optional` **capture**: `boolean` \| ``"environment"`` \| ``"user"``

#### Inherited from

WithElementAttrs.capture

#### Defined in

node_modules/@types/react/index.d.ts:2224

___

### checked

• `Optional` **checked**: `boolean`

#### Inherited from

WithElementAttrs.checked

#### Defined in

node_modules/@types/react/index.d.ts:2225

___

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

WithElementAttrs.children

#### Defined in

node_modules/@types/react/index.d.ts:1374

___

### className

• `Optional` **className**: `string`

#### Inherited from

WithElementAttrs.className

#### Defined in

node_modules/@types/react/index.d.ts:1853

___

### color

• `Optional` **color**: `string`

#### Inherited from

WithElementAttrs.color

#### Defined in

node_modules/@types/react/index.d.ts:1889

___

### containerRef

• `Optional` **containerRef**: `MutableRefObject`<`HTMLDivElement`\>

DOM Ref to `<div>` containing the `<input />`

#### Defined in

[packages/core/src/TextInput/index.tsx:26](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/core/src/TextInput/index.tsx#L26)

___

### contentEditable

• `Optional` **contentEditable**: ``"inherit"`` \| `Booleanish`

#### Inherited from

WithElementAttrs.contentEditable

#### Defined in

node_modules/@types/react/index.d.ts:1854

___

### contextMenu

• `Optional` **contextMenu**: `string`

#### Inherited from

WithElementAttrs.contextMenu

#### Defined in

node_modules/@types/react/index.d.ts:1855

___

### crossOrigin

• `Optional` **crossOrigin**: `string`

#### Inherited from

WithElementAttrs.crossOrigin

#### Defined in

node_modules/@types/react/index.d.ts:2226

___

### danger

• `Optional` **danger**: `boolean`

#### Inherited from

[WithIntent](theme_src_colors.WithIntent.md).[danger](theme_src_colors.WithIntent.md#danger)

#### Defined in

[packages/theme/src/colors.ts:161](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/theme/src/colors.ts#L161)

___

### dangerouslySetInnerHTML

• `Optional` **dangerouslySetInnerHTML**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__html` | `string` |

#### Inherited from

WithElementAttrs.dangerouslySetInnerHTML

#### Defined in

node_modules/@types/react/index.d.ts:1375

___

### datatype

• `Optional` **datatype**: `string`

#### Inherited from

WithElementAttrs.datatype

#### Defined in

node_modules/@types/react/index.d.ts:1877

___

### defaultChecked

• `Optional` **defaultChecked**: `boolean`

#### Inherited from

WithElementAttrs.defaultChecked

#### Defined in

node_modules/@types/react/index.d.ts:1846

___

### defaultValue

• `Optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Inherited from

WithElementAttrs.defaultValue

#### Defined in

node_modules/@types/react/index.d.ts:1847

___

### dir

• `Optional` **dir**: `string`

#### Inherited from

WithElementAttrs.dir

#### Defined in

node_modules/@types/react/index.d.ts:1856

___

### disabled

• `Optional` **disabled**: `boolean`

Disables the `<input />`

#### Overrides

WithElementAttrs.disabled

#### Defined in

[packages/core/src/TextInput/index.tsx:18](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/core/src/TextInput/index.tsx#L18)

___

### draggable

• `Optional` **draggable**: `Booleanish`

#### Inherited from

WithElementAttrs.draggable

#### Defined in

node_modules/@types/react/index.d.ts:1857

___

### enterKeyHint

• `Optional` **enterKeyHint**: ``"search"`` \| ``"next"`` \| ``"done"`` \| ``"enter"`` \| ``"go"`` \| ``"previous"`` \| ``"send"``

#### Inherited from

WithElementAttrs.enterKeyHint

#### Defined in

node_modules/@types/react/index.d.ts:2228

___

### focusOnMount

• `Optional` **focusOnMount**: `boolean`

Automatically focus on this `<input />` when mounted

#### Defined in

[packages/core/src/TextInput/index.tsx:22](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/core/src/TextInput/index.tsx#L22)

___

### focused

• `Optional` **focused**: `boolean`

Manually control the (visible but not actual) focus state of the TextInput

#### Defined in

[packages/core/src/TextInput/index.tsx:16](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/core/src/TextInput/index.tsx#L16)

___

### form

• `Optional` **form**: `string`

#### Inherited from

WithElementAttrs.form

#### Defined in

node_modules/@types/react/index.d.ts:2229

___

### formAction

• `Optional` **formAction**: `string`

#### Inherited from

WithElementAttrs.formAction

#### Defined in

node_modules/@types/react/index.d.ts:2230

___

### formEncType

• `Optional` **formEncType**: `string`

#### Inherited from

WithElementAttrs.formEncType

#### Defined in

node_modules/@types/react/index.d.ts:2231

___

### formMethod

• `Optional` **formMethod**: `string`

#### Inherited from

WithElementAttrs.formMethod

#### Defined in

node_modules/@types/react/index.d.ts:2232

___

### formNoValidate

• `Optional` **formNoValidate**: `boolean`

#### Inherited from

WithElementAttrs.formNoValidate

#### Defined in

node_modules/@types/react/index.d.ts:2233

___

### formTarget

• `Optional` **formTarget**: `string`

#### Inherited from

WithElementAttrs.formTarget

#### Defined in

node_modules/@types/react/index.d.ts:2234

___

### height

• `Optional` **height**: `string` \| `number`

#### Inherited from

WithElementAttrs.height

#### Defined in

node_modules/@types/react/index.d.ts:2235

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

WithElementAttrs.hidden

#### Defined in

node_modules/@types/react/index.d.ts:1858

___

### id

• `Optional` **id**: `string`

#### Inherited from

WithElementAttrs.id

#### Defined in

node_modules/@types/react/index.d.ts:1859

___

### inlist

• `Optional` **inlist**: `any`

#### Inherited from

WithElementAttrs.inlist

#### Defined in

node_modules/@types/react/index.d.ts:1878

___

### inputMode

• `Optional` **inputMode**: ``"search"`` \| ``"numeric"`` \| ``"none"`` \| ``"url"`` \| ``"text"`` \| ``"decimal"`` \| ``"tel"`` \| ``"email"``

Hints at the type of data that might be entered by the user while editing the element or its contents

**`See`**

https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute

#### Inherited from

WithElementAttrs.inputMode

#### Defined in

node_modules/@types/react/index.d.ts:1904

___

### intent

• `Optional` **intent**: ``"normal"`` \| ``"success"`` \| ``"danger"`` \| ``"warning"`` \| ``"primary"``

#### Inherited from

[WithIntent](theme_src_colors.WithIntent.md).[intent](theme_src_colors.WithIntent.md#intent)

#### Defined in

[packages/theme/src/colors.ts:168](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/theme/src/colors.ts#L168)

___

### is

• `Optional` **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

**`See`**

https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is

#### Inherited from

WithElementAttrs.is

#### Defined in

node_modules/@types/react/index.d.ts:1909

___

### itemID

• `Optional` **itemID**: `string`

#### Inherited from

WithElementAttrs.itemID

#### Defined in

node_modules/@types/react/index.d.ts:1893

___

### itemProp

• `Optional` **itemProp**: `string`

#### Inherited from

WithElementAttrs.itemProp

#### Defined in

node_modules/@types/react/index.d.ts:1890

___

### itemRef

• `Optional` **itemRef**: `string`

#### Inherited from

WithElementAttrs.itemRef

#### Defined in

node_modules/@types/react/index.d.ts:1894

___

### itemScope

• `Optional` **itemScope**: `boolean`

#### Inherited from

WithElementAttrs.itemScope

#### Defined in

node_modules/@types/react/index.d.ts:1891

___

### itemType

• `Optional` **itemType**: `string`

#### Inherited from

WithElementAttrs.itemType

#### Defined in

node_modules/@types/react/index.d.ts:1892

___

### key

• `Optional` **key**: ``null`` \| `Key`

#### Inherited from

WithElementAttrs.key

#### Defined in

node_modules/@types/react/index.d.ts:131

___

### lang

• `Optional` **lang**: `string`

#### Inherited from

WithElementAttrs.lang

#### Defined in

node_modules/@types/react/index.d.ts:1860

___

### leftElement

• `Optional` **leftElement**: `ReactNode`

#### Defined in

[packages/core/src/TextInput/index.tsx:23](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/core/src/TextInput/index.tsx#L23)

___

### leftIcon

• `Optional` **leftIcon**: `ReactNode`

#### Defined in

[packages/core/src/TextInput/index.tsx:19](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/core/src/TextInput/index.tsx#L19)

___

### list

• `Optional` **list**: `string`

#### Inherited from

WithElementAttrs.list

#### Defined in

node_modules/@types/react/index.d.ts:2236

___

### max

• `Optional` **max**: `string` \| `number`

#### Inherited from

WithElementAttrs.max

#### Defined in

node_modules/@types/react/index.d.ts:2237

___

### maxLength

• `Optional` **maxLength**: `number`

#### Inherited from

WithElementAttrs.maxLength

#### Defined in

node_modules/@types/react/index.d.ts:2238

___

### min

• `Optional` **min**: `string` \| `number`

#### Inherited from

WithElementAttrs.min

#### Defined in

node_modules/@types/react/index.d.ts:2239

___

### minLength

• `Optional` **minLength**: `number`

#### Inherited from

WithElementAttrs.minLength

#### Defined in

node_modules/@types/react/index.d.ts:2240

___

### multiple

• `Optional` **multiple**: `boolean`

#### Inherited from

WithElementAttrs.multiple

#### Defined in

node_modules/@types/react/index.d.ts:2241

___

### name

• `Optional` **name**: `string`

#### Inherited from

WithElementAttrs.name

#### Defined in

node_modules/@types/react/index.d.ts:2242

___

### onAbort

• `Optional` **onAbort**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onAbort

#### Defined in

node_modules/@types/react/index.d.ts:1432

___

### onAbortCapture

• `Optional` **onAbortCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onAbortCapture

#### Defined in

node_modules/@types/react/index.d.ts:1433

___

### onAnimationEnd

• `Optional` **onAnimationEnd**: `AnimationEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onAnimationEnd

#### Defined in

node_modules/@types/react/index.d.ts:1562

___

### onAnimationEndCapture

• `Optional` **onAnimationEndCapture**: `AnimationEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onAnimationEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1563

___

### onAnimationIteration

• `Optional` **onAnimationIteration**: `AnimationEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onAnimationIteration

#### Defined in

node_modules/@types/react/index.d.ts:1564

___

### onAnimationIterationCapture

• `Optional` **onAnimationIterationCapture**: `AnimationEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onAnimationIterationCapture

#### Defined in

node_modules/@types/react/index.d.ts:1565

___

### onAnimationStart

• `Optional` **onAnimationStart**: `AnimationEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onAnimationStart

#### Defined in

node_modules/@types/react/index.d.ts:1560

___

### onAnimationStartCapture

• `Optional` **onAnimationStartCapture**: `AnimationEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onAnimationStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1561

___

### onAuxClick

• `Optional` **onAuxClick**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onAuxClick

#### Defined in

node_modules/@types/react/index.d.ts:1478

___

### onAuxClickCapture

• `Optional` **onAuxClickCapture**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onAuxClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1479

___

### onBeforeInput

• `Optional` **onBeforeInput**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onBeforeInput

#### Defined in

node_modules/@types/react/index.d.ts:1404

___

### onBeforeInputCapture

• `Optional` **onBeforeInputCapture**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onBeforeInputCapture

#### Defined in

node_modules/@types/react/index.d.ts:1405

___

### onBlur

• `Optional` **onBlur**: `FocusEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onBlur

#### Defined in

node_modules/@types/react/index.d.ts:1398

___

### onBlurCapture

• `Optional` **onBlurCapture**: `FocusEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onBlurCapture

#### Defined in

node_modules/@types/react/index.d.ts:1399

___

### onCanPlay

• `Optional` **onCanPlay**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCanPlay

#### Defined in

node_modules/@types/react/index.d.ts:1434

___

### onCanPlayCapture

• `Optional` **onCanPlayCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCanPlayCapture

#### Defined in

node_modules/@types/react/index.d.ts:1435

___

### onCanPlayThrough

• `Optional` **onCanPlayThrough**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCanPlayThrough

#### Defined in

node_modules/@types/react/index.d.ts:1436

___

### onCanPlayThroughCapture

• `Optional` **onCanPlayThroughCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCanPlayThroughCapture

#### Defined in

node_modules/@types/react/index.d.ts:1437

___

### onChange

• `Optional` **onChange**: `ChangeEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onChange

#### Defined in

node_modules/@types/react/index.d.ts:2254

___

### onChangeCapture

• `Optional` **onChangeCapture**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1403

___

### onClick

• `Optional` **onClick**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onClick

#### Defined in

node_modules/@types/react/index.d.ts:1480

___

### onClickCapture

• `Optional` **onClickCapture**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1481

___

### onCompositionEnd

• `Optional` **onCompositionEnd**: `CompositionEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCompositionEnd

#### Defined in

node_modules/@types/react/index.d.ts:1388

___

### onCompositionEndCapture

• `Optional` **onCompositionEndCapture**: `CompositionEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCompositionEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1389

___

### onCompositionStart

• `Optional` **onCompositionStart**: `CompositionEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCompositionStart

#### Defined in

node_modules/@types/react/index.d.ts:1390

___

### onCompositionStartCapture

• `Optional` **onCompositionStartCapture**: `CompositionEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCompositionStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1391

___

### onCompositionUpdate

• `Optional` **onCompositionUpdate**: `CompositionEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCompositionUpdate

#### Defined in

node_modules/@types/react/index.d.ts:1392

___

### onCompositionUpdateCapture

• `Optional` **onCompositionUpdateCapture**: `CompositionEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCompositionUpdateCapture

#### Defined in

node_modules/@types/react/index.d.ts:1393

___

### onContextMenu

• `Optional` **onContextMenu**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onContextMenu

#### Defined in

node_modules/@types/react/index.d.ts:1482

___

### onContextMenuCapture

• `Optional` **onContextMenuCapture**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onContextMenuCapture

#### Defined in

node_modules/@types/react/index.d.ts:1483

___

### onCopy

• `Optional` **onCopy**: `ClipboardEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCopy

#### Defined in

node_modules/@types/react/index.d.ts:1380

___

### onCopyCapture

• `Optional` **onCopyCapture**: `ClipboardEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCopyCapture

#### Defined in

node_modules/@types/react/index.d.ts:1381

___

### onCut

• `Optional` **onCut**: `ClipboardEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCut

#### Defined in

node_modules/@types/react/index.d.ts:1382

___

### onCutCapture

• `Optional` **onCutCapture**: `ClipboardEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onCutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1383

___

### onDoubleClick

• `Optional` **onDoubleClick**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDoubleClick

#### Defined in

node_modules/@types/react/index.d.ts:1484

___

### onDoubleClickCapture

• `Optional` **onDoubleClickCapture**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDoubleClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1485

___

### onDrag

• `Optional` **onDrag**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDrag

#### Defined in

node_modules/@types/react/index.d.ts:1486

___

### onDragCapture

• `Optional` **onDragCapture**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragCapture

#### Defined in

node_modules/@types/react/index.d.ts:1487

___

### onDragEnd

• `Optional` **onDragEnd**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragEnd

#### Defined in

node_modules/@types/react/index.d.ts:1488

___

### onDragEndCapture

• `Optional` **onDragEndCapture**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1489

___

### onDragEnter

• `Optional` **onDragEnter**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragEnter

#### Defined in

node_modules/@types/react/index.d.ts:1490

___

### onDragEnterCapture

• `Optional` **onDragEnterCapture**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragEnterCapture

#### Defined in

node_modules/@types/react/index.d.ts:1491

___

### onDragExit

• `Optional` **onDragExit**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragExit

#### Defined in

node_modules/@types/react/index.d.ts:1492

___

### onDragExitCapture

• `Optional` **onDragExitCapture**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragExitCapture

#### Defined in

node_modules/@types/react/index.d.ts:1493

___

### onDragLeave

• `Optional` **onDragLeave**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragLeave

#### Defined in

node_modules/@types/react/index.d.ts:1494

___

### onDragLeaveCapture

• `Optional` **onDragLeaveCapture**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragLeaveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1495

___

### onDragOver

• `Optional` **onDragOver**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragOver

#### Defined in

node_modules/@types/react/index.d.ts:1496

___

### onDragOverCapture

• `Optional` **onDragOverCapture**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1497

___

### onDragStart

• `Optional` **onDragStart**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragStart

#### Defined in

node_modules/@types/react/index.d.ts:1498

___

### onDragStartCapture

• `Optional` **onDragStartCapture**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDragStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1499

___

### onDrop

• `Optional` **onDrop**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDrop

#### Defined in

node_modules/@types/react/index.d.ts:1500

___

### onDropCapture

• `Optional` **onDropCapture**: `DragEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDropCapture

#### Defined in

node_modules/@types/react/index.d.ts:1501

___

### onDurationChange

• `Optional` **onDurationChange**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDurationChange

#### Defined in

node_modules/@types/react/index.d.ts:1438

___

### onDurationChangeCapture

• `Optional` **onDurationChangeCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onDurationChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1439

___

### onEmptied

• `Optional` **onEmptied**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onEmptied

#### Defined in

node_modules/@types/react/index.d.ts:1440

___

### onEmptiedCapture

• `Optional` **onEmptiedCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onEmptiedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1441

___

### onEncrypted

• `Optional` **onEncrypted**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onEncrypted

#### Defined in

node_modules/@types/react/index.d.ts:1442

___

### onEncryptedCapture

• `Optional` **onEncryptedCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onEncryptedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1443

___

### onEnded

• `Optional` **onEnded**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onEnded

#### Defined in

node_modules/@types/react/index.d.ts:1444

___

### onEndedCapture

• `Optional` **onEndedCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onEndedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1445

___

### onError

• `Optional` **onError**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onError

#### Defined in

node_modules/@types/react/index.d.ts:1418

___

### onErrorCapture

• `Optional` **onErrorCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onErrorCapture

#### Defined in

node_modules/@types/react/index.d.ts:1419

___

### onFocus

• `Optional` **onFocus**: `FocusEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onFocus

#### Defined in

node_modules/@types/react/index.d.ts:1396

___

### onFocusCapture

• `Optional` **onFocusCapture**: `FocusEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onFocusCapture

#### Defined in

node_modules/@types/react/index.d.ts:1397

___

### onGotPointerCapture

• `Optional` **onGotPointerCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onGotPointerCapture

#### Defined in

node_modules/@types/react/index.d.ts:1546

___

### onGotPointerCaptureCapture

• `Optional` **onGotPointerCaptureCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onGotPointerCaptureCapture

#### Defined in

node_modules/@types/react/index.d.ts:1547

___

### onInput

• `Optional` **onInput**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onInput

#### Defined in

node_modules/@types/react/index.d.ts:1406

___

### onInputCapture

• `Optional` **onInputCapture**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onInputCapture

#### Defined in

node_modules/@types/react/index.d.ts:1407

___

### onInvalid

• `Optional` **onInvalid**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onInvalid

#### Defined in

node_modules/@types/react/index.d.ts:1412

___

### onInvalidCapture

• `Optional` **onInvalidCapture**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onInvalidCapture

#### Defined in

node_modules/@types/react/index.d.ts:1413

___

### onKeyDown

• `Optional` **onKeyDown**: `KeyboardEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onKeyDown

#### Defined in

node_modules/@types/react/index.d.ts:1422

___

### onKeyDownCapture

• `Optional` **onKeyDownCapture**: `KeyboardEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onKeyDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1423

___

### onKeyPress

• `Optional` **onKeyPress**: `KeyboardEventHandler`<`HTMLInputElement`\>

**`Deprecated`**

#### Inherited from

WithElementAttrs.onKeyPress

#### Defined in

node_modules/@types/react/index.d.ts:1425

___

### onKeyPressCapture

• `Optional` **onKeyPressCapture**: `KeyboardEventHandler`<`HTMLInputElement`\>

**`Deprecated`**

#### Inherited from

WithElementAttrs.onKeyPressCapture

#### Defined in

node_modules/@types/react/index.d.ts:1427

___

### onKeyUp

• `Optional` **onKeyUp**: `KeyboardEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onKeyUp

#### Defined in

node_modules/@types/react/index.d.ts:1428

___

### onKeyUpCapture

• `Optional` **onKeyUpCapture**: `KeyboardEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onKeyUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1429

___

### onLoad

• `Optional` **onLoad**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onLoad

#### Defined in

node_modules/@types/react/index.d.ts:1416

___

### onLoadCapture

• `Optional` **onLoadCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onLoadCapture

#### Defined in

node_modules/@types/react/index.d.ts:1417

___

### onLoadStart

• `Optional` **onLoadStart**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onLoadStart

#### Defined in

node_modules/@types/react/index.d.ts:1450

___

### onLoadStartCapture

• `Optional` **onLoadStartCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onLoadStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1451

___

### onLoadedData

• `Optional` **onLoadedData**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onLoadedData

#### Defined in

node_modules/@types/react/index.d.ts:1446

___

### onLoadedDataCapture

• `Optional` **onLoadedDataCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onLoadedDataCapture

#### Defined in

node_modules/@types/react/index.d.ts:1447

___

### onLoadedMetadata

• `Optional` **onLoadedMetadata**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onLoadedMetadata

#### Defined in

node_modules/@types/react/index.d.ts:1448

___

### onLoadedMetadataCapture

• `Optional` **onLoadedMetadataCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onLoadedMetadataCapture

#### Defined in

node_modules/@types/react/index.d.ts:1449

___

### onLostPointerCapture

• `Optional` **onLostPointerCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onLostPointerCapture

#### Defined in

node_modules/@types/react/index.d.ts:1548

___

### onLostPointerCaptureCapture

• `Optional` **onLostPointerCaptureCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onLostPointerCaptureCapture

#### Defined in

node_modules/@types/react/index.d.ts:1549

___

### onMouseDown

• `Optional` **onMouseDown**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseDown

#### Defined in

node_modules/@types/react/index.d.ts:1502

___

### onMouseDownCapture

• `Optional` **onMouseDownCapture**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1503

___

### onMouseEnter

• `Optional` **onMouseEnter**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseEnter

#### Defined in

node_modules/@types/react/index.d.ts:1504

___

### onMouseLeave

• `Optional` **onMouseLeave**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseLeave

#### Defined in

node_modules/@types/react/index.d.ts:1505

___

### onMouseMove

• `Optional` **onMouseMove**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseMove

#### Defined in

node_modules/@types/react/index.d.ts:1506

___

### onMouseMoveCapture

• `Optional` **onMouseMoveCapture**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1507

___

### onMouseOut

• `Optional` **onMouseOut**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseOut

#### Defined in

node_modules/@types/react/index.d.ts:1508

___

### onMouseOutCapture

• `Optional` **onMouseOutCapture**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseOutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1509

___

### onMouseOver

• `Optional` **onMouseOver**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseOver

#### Defined in

node_modules/@types/react/index.d.ts:1510

___

### onMouseOverCapture

• `Optional` **onMouseOverCapture**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1511

___

### onMouseUp

• `Optional` **onMouseUp**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseUp

#### Defined in

node_modules/@types/react/index.d.ts:1512

___

### onMouseUpCapture

• `Optional` **onMouseUpCapture**: `MouseEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onMouseUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1513

___

### onPaste

• `Optional` **onPaste**: `ClipboardEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPaste

#### Defined in

node_modules/@types/react/index.d.ts:1384

___

### onPasteCapture

• `Optional` **onPasteCapture**: `ClipboardEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPasteCapture

#### Defined in

node_modules/@types/react/index.d.ts:1385

___

### onPause

• `Optional` **onPause**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPause

#### Defined in

node_modules/@types/react/index.d.ts:1452

___

### onPauseCapture

• `Optional` **onPauseCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPauseCapture

#### Defined in

node_modules/@types/react/index.d.ts:1453

___

### onPlay

• `Optional` **onPlay**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPlay

#### Defined in

node_modules/@types/react/index.d.ts:1454

___

### onPlayCapture

• `Optional` **onPlayCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPlayCapture

#### Defined in

node_modules/@types/react/index.d.ts:1455

___

### onPlaying

• `Optional` **onPlaying**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPlaying

#### Defined in

node_modules/@types/react/index.d.ts:1456

___

### onPlayingCapture

• `Optional` **onPlayingCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPlayingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1457

___

### onPointerCancel

• `Optional` **onPointerCancel**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerCancel

#### Defined in

node_modules/@types/react/index.d.ts:1536

___

### onPointerCancelCapture

• `Optional` **onPointerCancelCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerCancelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1537

___

### onPointerDown

• `Optional` **onPointerDown**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerDown

#### Defined in

node_modules/@types/react/index.d.ts:1530

___

### onPointerDownCapture

• `Optional` **onPointerDownCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1531

___

### onPointerEnter

• `Optional` **onPointerEnter**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerEnter

#### Defined in

node_modules/@types/react/index.d.ts:1538

___

### onPointerEnterCapture

• `Optional` **onPointerEnterCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerEnterCapture

#### Defined in

node_modules/@types/react/index.d.ts:1539

___

### onPointerLeave

• `Optional` **onPointerLeave**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerLeave

#### Defined in

node_modules/@types/react/index.d.ts:1540

___

### onPointerLeaveCapture

• `Optional` **onPointerLeaveCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerLeaveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1541

___

### onPointerMove

• `Optional` **onPointerMove**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerMove

#### Defined in

node_modules/@types/react/index.d.ts:1532

___

### onPointerMoveCapture

• `Optional` **onPointerMoveCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1533

___

### onPointerOut

• `Optional` **onPointerOut**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerOut

#### Defined in

node_modules/@types/react/index.d.ts:1544

___

### onPointerOutCapture

• `Optional` **onPointerOutCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerOutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1545

___

### onPointerOver

• `Optional` **onPointerOver**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerOver

#### Defined in

node_modules/@types/react/index.d.ts:1542

___

### onPointerOverCapture

• `Optional` **onPointerOverCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1543

___

### onPointerUp

• `Optional` **onPointerUp**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerUp

#### Defined in

node_modules/@types/react/index.d.ts:1534

___

### onPointerUpCapture

• `Optional` **onPointerUpCapture**: `PointerEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onPointerUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1535

___

### onProgress

• `Optional` **onProgress**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onProgress

#### Defined in

node_modules/@types/react/index.d.ts:1458

___

### onProgressCapture

• `Optional` **onProgressCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onProgressCapture

#### Defined in

node_modules/@types/react/index.d.ts:1459

___

### onRateChange

• `Optional` **onRateChange**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onRateChange

#### Defined in

node_modules/@types/react/index.d.ts:1460

___

### onRateChangeCapture

• `Optional` **onRateChangeCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onRateChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1461

___

### onReset

• `Optional` **onReset**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onReset

#### Defined in

node_modules/@types/react/index.d.ts:1408

___

### onResetCapture

• `Optional` **onResetCapture**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onResetCapture

#### Defined in

node_modules/@types/react/index.d.ts:1409

___

### onScroll

• `Optional` **onScroll**: `UIEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onScroll

#### Defined in

node_modules/@types/react/index.d.ts:1552

___

### onScrollCapture

• `Optional` **onScrollCapture**: `UIEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onScrollCapture

#### Defined in

node_modules/@types/react/index.d.ts:1553

___

### onSeeked

• `Optional` **onSeeked**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onSeeked

#### Defined in

node_modules/@types/react/index.d.ts:1462

___

### onSeekedCapture

• `Optional` **onSeekedCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onSeekedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1463

___

### onSeeking

• `Optional` **onSeeking**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onSeeking

#### Defined in

node_modules/@types/react/index.d.ts:1464

___

### onSeekingCapture

• `Optional` **onSeekingCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onSeekingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1465

___

### onSelect

• `Optional` **onSelect**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onSelect

#### Defined in

node_modules/@types/react/index.d.ts:1516

___

### onSelectCapture

• `Optional` **onSelectCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onSelectCapture

#### Defined in

node_modules/@types/react/index.d.ts:1517

___

### onStalled

• `Optional` **onStalled**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onStalled

#### Defined in

node_modules/@types/react/index.d.ts:1466

___

### onStalledCapture

• `Optional` **onStalledCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onStalledCapture

#### Defined in

node_modules/@types/react/index.d.ts:1467

___

### onSubmit

• `Optional` **onSubmit**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onSubmit

#### Defined in

node_modules/@types/react/index.d.ts:1410

___

### onSubmitCapture

• `Optional` **onSubmitCapture**: `FormEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onSubmitCapture

#### Defined in

node_modules/@types/react/index.d.ts:1411

___

### onSuspend

• `Optional` **onSuspend**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onSuspend

#### Defined in

node_modules/@types/react/index.d.ts:1468

___

### onSuspendCapture

• `Optional` **onSuspendCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onSuspendCapture

#### Defined in

node_modules/@types/react/index.d.ts:1469

___

### onTimeUpdate

• `Optional` **onTimeUpdate**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTimeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:1470

___

### onTimeUpdateCapture

• `Optional` **onTimeUpdateCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTimeUpdateCapture

#### Defined in

node_modules/@types/react/index.d.ts:1471

___

### onTouchCancel

• `Optional` **onTouchCancel**: `TouchEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTouchCancel

#### Defined in

node_modules/@types/react/index.d.ts:1520

___

### onTouchCancelCapture

• `Optional` **onTouchCancelCapture**: `TouchEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTouchCancelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1521

___

### onTouchEnd

• `Optional` **onTouchEnd**: `TouchEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTouchEnd

#### Defined in

node_modules/@types/react/index.d.ts:1522

___

### onTouchEndCapture

• `Optional` **onTouchEndCapture**: `TouchEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTouchEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1523

___

### onTouchMove

• `Optional` **onTouchMove**: `TouchEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTouchMove

#### Defined in

node_modules/@types/react/index.d.ts:1524

___

### onTouchMoveCapture

• `Optional` **onTouchMoveCapture**: `TouchEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTouchMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1525

___

### onTouchStart

• `Optional` **onTouchStart**: `TouchEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTouchStart

#### Defined in

node_modules/@types/react/index.d.ts:1526

___

### onTouchStartCapture

• `Optional` **onTouchStartCapture**: `TouchEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTouchStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1527

___

### onTransitionEnd

• `Optional` **onTransitionEnd**: `TransitionEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTransitionEnd

#### Defined in

node_modules/@types/react/index.d.ts:1568

___

### onTransitionEndCapture

• `Optional` **onTransitionEndCapture**: `TransitionEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onTransitionEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1569

___

### onVolumeChange

• `Optional` **onVolumeChange**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onVolumeChange

#### Defined in

node_modules/@types/react/index.d.ts:1472

___

### onVolumeChangeCapture

• `Optional` **onVolumeChangeCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onVolumeChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1473

___

### onWaiting

• `Optional` **onWaiting**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onWaiting

#### Defined in

node_modules/@types/react/index.d.ts:1474

___

### onWaitingCapture

• `Optional` **onWaitingCapture**: `ReactEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onWaitingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1475

___

### onWheel

• `Optional` **onWheel**: `WheelEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onWheel

#### Defined in

node_modules/@types/react/index.d.ts:1556

___

### onWheelCapture

• `Optional` **onWheelCapture**: `WheelEventHandler`<`HTMLInputElement`\>

#### Inherited from

WithElementAttrs.onWheelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1557

___

### pattern

• `Optional` **pattern**: `string`

#### Inherited from

WithElementAttrs.pattern

#### Defined in

node_modules/@types/react/index.d.ts:2243

___

### placeholder

• `Optional` **placeholder**: `string`

#### Inherited from

WithElementAttrs.placeholder

#### Defined in

node_modules/@types/react/index.d.ts:2244

___

### prefix

• `Optional` **prefix**: `string`

#### Inherited from

WithElementAttrs.prefix

#### Defined in

node_modules/@types/react/index.d.ts:1879

___

### primary

• `Optional` **primary**: `boolean`

#### Inherited from

[WithIntent](theme_src_colors.WithIntent.md).[primary](theme_src_colors.WithIntent.md#primary)

#### Defined in

[packages/theme/src/colors.ts:164](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/theme/src/colors.ts#L164)

___

### property

• `Optional` **property**: `string`

#### Inherited from

WithElementAttrs.property

#### Defined in

node_modules/@types/react/index.d.ts:1880

___

### radioGroup

• `Optional` **radioGroup**: `string`

#### Inherited from

WithElementAttrs.radioGroup

#### Defined in

node_modules/@types/react/index.d.ts:1870

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Inherited from

WithElementAttrs.readOnly

#### Defined in

node_modules/@types/react/index.d.ts:2245

___

### required

• `Optional` **required**: `boolean`

#### Inherited from

WithElementAttrs.required

#### Defined in

node_modules/@types/react/index.d.ts:2246

___

### resource

• `Optional` **resource**: `string`

#### Inherited from

WithElementAttrs.resource

#### Defined in

node_modules/@types/react/index.d.ts:1881

___

### results

• `Optional` **results**: `number`

#### Inherited from

WithElementAttrs.results

#### Defined in

node_modules/@types/react/index.d.ts:1895

___

### rightElement

• `Optional` **rightElement**: `ReactNode`

#### Defined in

[packages/core/src/TextInput/index.tsx:24](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/core/src/TextInput/index.tsx#L24)

___

### rightIcon

• `Optional` **rightIcon**: `ReactNode`

#### Defined in

[packages/core/src/TextInput/index.tsx:20](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/core/src/TextInput/index.tsx#L20)

___

### role

• `Optional` **role**: `AriaRole`

#### Inherited from

WithElementAttrs.role

#### Defined in

node_modules/@types/react/index.d.ts:1873

___

### security

• `Optional` **security**: `string`

#### Inherited from

WithElementAttrs.security

#### Defined in

node_modules/@types/react/index.d.ts:1896

___

### size

• `Optional` **size**: `number`

#### Inherited from

WithElementAttrs.size

#### Defined in

node_modules/@types/react/index.d.ts:2247

___

### slot

• `Optional` **slot**: `string`

#### Inherited from

WithElementAttrs.slot

#### Defined in

node_modules/@types/react/index.d.ts:1862

___

### spellCheck

• `Optional` **spellCheck**: `Booleanish`

#### Inherited from

WithElementAttrs.spellCheck

#### Defined in

node_modules/@types/react/index.d.ts:1863

___

### src

• `Optional` **src**: `string`

#### Inherited from

WithElementAttrs.src

#### Defined in

node_modules/@types/react/index.d.ts:2248

___

### step

• `Optional` **step**: `string` \| `number`

#### Inherited from

WithElementAttrs.step

#### Defined in

node_modules/@types/react/index.d.ts:2249

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

WithElementAttrs.style

#### Defined in

node_modules/@types/react/index.d.ts:1864

___

### success

• `Optional` **success**: `boolean`

#### Inherited from

[WithIntent](theme_src_colors.WithIntent.md).[success](theme_src_colors.WithIntent.md#success)

#### Defined in

[packages/theme/src/colors.ts:163](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/theme/src/colors.ts#L163)

___

### suppressContentEditableWarning

• `Optional` **suppressContentEditableWarning**: `boolean`

#### Inherited from

WithElementAttrs.suppressContentEditableWarning

#### Defined in

node_modules/@types/react/index.d.ts:1848

___

### suppressHydrationWarning

• `Optional` **suppressHydrationWarning**: `boolean`

#### Inherited from

WithElementAttrs.suppressHydrationWarning

#### Defined in

node_modules/@types/react/index.d.ts:1849

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

WithElementAttrs.tabIndex

#### Defined in

node_modules/@types/react/index.d.ts:1865

___

### title

• `Optional` **title**: `string`

#### Inherited from

WithElementAttrs.title

#### Defined in

node_modules/@types/react/index.d.ts:1866

___

### translate

• `Optional` **translate**: ``"yes"`` \| ``"no"``

#### Inherited from

WithElementAttrs.translate

#### Defined in

node_modules/@types/react/index.d.ts:1867

___

### type

• `Optional` **type**: `HTMLInputTypeAttribute`

#### Inherited from

WithElementAttrs.type

#### Defined in

node_modules/@types/react/index.d.ts:2250

___

### typeof

• `Optional` **typeof**: `string`

#### Inherited from

WithElementAttrs.typeof

#### Defined in

node_modules/@types/react/index.d.ts:1882

___

### unselectable

• `Optional` **unselectable**: ``"on"`` \| ``"off"``

#### Inherited from

WithElementAttrs.unselectable

#### Defined in

node_modules/@types/react/index.d.ts:1897

___

### value

• `Optional` **value**: `string` \| `number` \| readonly `string`[]

#### Inherited from

WithElementAttrs.value

#### Defined in

node_modules/@types/react/index.d.ts:2251

___

### vocab

• `Optional` **vocab**: `string`

#### Inherited from

WithElementAttrs.vocab

#### Defined in

node_modules/@types/react/index.d.ts:1883

___

### warning

• `Optional` **warning**: `boolean`

#### Inherited from

[WithIntent](theme_src_colors.WithIntent.md).[warning](theme_src_colors.WithIntent.md#warning)

#### Defined in

[packages/theme/src/colors.ts:162](https://github.com/rozzzly/overcast-ui/blob/23b69a1/packages/theme/src/colors.ts#L162)

___

### width

• `Optional` **width**: `string` \| `number`

#### Inherited from

WithElementAttrs.width

#### Defined in

node_modules/@types/react/index.d.ts:2252
