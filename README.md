# Flexboss

A powerful, versatile CSS3 flexible box (Flexbox) grid system for building great HTML5 user interface components and web applications.

For a visual introduction, please refer to: [documentation](#documentation).

## Basic syntax/structure
The grid system is based on the following HTML structure:

```html
<div class="grid">
    <div class="grid-cell">1st grid-cell child of the main grid</div>
    
    <div class="grid">
        <div class="grid-cell">1st grid-cell child of a nested grid</div>
        
        <div class="grid-cell">2nd grid-cell child of a nested grid</div>
    </div>
</div>
```

The core CSS classes of the grid system are:
- `grid`: A class name representing flex-container elements, which are only used as containers for `grid-cell` elements, i.e. the `grid` elements don't have any content of their own.
- `grid-cell`: A class name representing flex-item elements, which are charactarized by sharing the space of the parent `grid` with its `grid-cell` (and nested `grid`) siblings and have content of their own. 
- `grid--`: An optional block modifier namespace exclusively for `grid` elements, which is used to modify the default behavior of the child `grid-cell` (and nested `grid`) elements of the `grid` element to which the modifier class is applied.
- `g--`: An optional modifier namespace used for both `grid` and `grid-cell` elements, which is used to modify the behavior of the element to which the modifier class is applied.

For a full list of interfaces for the `grid--` and `g--` modifier classes, please refer to the test page: http://adambarry.github.io/Flexboss/test/test.html, but among other things, the modifiers enable:
- Horizontal or vertical layout of grids.
- Adaptive or equal size grid-cells.
- Fitted elements which only occupy the minimum required space.
- Alignment - both for grids in general as well as for the individual grid-cell elements.
- Gutters, i.e. spacing between elements, for both general and for individual elements.
- Grid-cell sizing.
- Grid-cell wrapping within a grid.
- Grid-cell scrolling.
- Grid-cell ordering.

Each `grid` element is a self-contained entity, which can be modified independently of its ancestors, e.g. if a grid is horizontally oriented (default behavior) a child grid can be laid out vertically (using the `grid--y` modifier class) i.e.:
	
```html
<div class="grid">
    <div class="grid-cell">I'm a direct child of the base horizontal grid</div>
    
    <div class="grid">
        <div class="grid-cell">I'm the 1st child of a nested horizontal grid (left)</div>
        
        <div class="grid-cell">I'm the 2nd child of a nested horizontal grid (right)</div>
    </div>
    
    <div class="grid grid--y">
        <div class="grid-cell">I'm the 1st child of a nested vertical grid (top)</div>
        
        <div class="grid-cell">I'm the 2nd child of a nested vertical grid (bottom)</div>
    </div>
</div>
```

## Browser support
- Google Chrome
- Apple Safari (including Mobile Safari)
- Mozilla Firefox
- Microsoft Edge (Project Spartan)
- Microsoft Internet Explorer 11/IE11
- Microsoft Internet Explorer 10/IE10 (with limited support for scrollable grid-cell elements)

## Getting started
To get started you can grab a HTML5 boilerplate from the "boilerplates" folder and either the compiled CSS-files from the "compiled" folder, or use the un/preprocessed LESS files located in the "less" folder. 

Refer to the [documentation](#documentation) (see below) to get an overview of the full feature set and how to use it.

### Install with Bower
You can also use the Bower package manager (http://bower.io/) to install Flexboss as part of your web application. To do so install Bower and execute the following command:

`bower install flexboss`

When installed you will need to complete the following steps:

1. Define the `@grid-cell-spacing` variable, e.g. `@grid-cell-spacing: 8px`, which defines the total distance between `grid-cell` elements when gutters are applied (currently specified in the `/less/grid-vars.less` file).
2. Reference the grid LESS files in a LESS-manifest (like the `/less/grid.less` manifest file), i.e.

```css
@import '/bower_components/flexboss/less/grid-core.less';
@import '/bower_components/flexboss/less/grid-ext.less';
```

## Documentation
http://adambarry.github.io/Flexboss/

## (Un)licence
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
