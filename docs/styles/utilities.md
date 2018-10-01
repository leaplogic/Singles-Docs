# Utilities

## Spacing
We have provided classes to add spacing (padding or margin) inline based off a baseline size. 
The classes are named using the format **has-{property}-{side}-{size}**

### Properties
`padding` `margin`

### Sizes
`small` `medium` `large` `huge`

### Sides
`top` `bottom` `right` `left` `vertical` `horizontal`

#### Example
```html
<div class="has-padding-bottom-medium"></div>
```


### Variables
All sizes are factors based off of a global-baseline size.  You can edit these in the `_bulmaVariables.scss` file.  

```sass
$global-baseline:     .375rem !default;
$global-spacing-unit-factor-small:    1 !default;   // 6px
$global-spacing-unit-factor-medium:   2 !default;   // 12px
$global-spacing-unit-factor:          4 !default;   // 24px
$global-spacing-unit-factor-large:    8 !default;   // 48px
$global-spacing-unit-factor-huge:     16 !default;  // 96px
```

Used from [inuitcss](https://github.com/inuitcss/inuitcss/blob/develop/utilities/_utilities.spacings.scss).


## Arrows
Arrows are a css specific way to create, well, arrows for your document. *(Singles uses the for the prev & next buttons for the slider interface)*

### Base Class
`u-arrow`

### Modifiers
`is-left` `is-right` `is-top` `is-bottom`

### Colors
Colors use the same modifiers as [Bulma Colors](https://bulma.io/documentation/modifiers/syntax/)
`is-primary` `is-link` `is-info` `is-success`

#### Example
```html
<div class="u-arrow is-right is-link"></div>
```

## Icons
These classes are for inlining SVG icons. Part of the Laravel Mix Webpack preprocessor creates a sprite of SVGs which gets included in the mark to reference the symbols. 

### Base Class
`icn`

### Sizes
`icn-16` `icn-24`

#### Examples

```html
<svg class='icn icn-24'><use xlink:href='#icon--arrow-right'></use></svg>
```
:::tip
For Craft CMS we have created a *macro* to reference the icons. 
:::

```twig
{% import '/_macros/_icons' as icons %}
{{ icons.i('arrow-down', 16, 16 ) }}
```