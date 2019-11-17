# Flexboss
A simple (yet comprehensive) X- and Y-axis CSS3 flexible box (Flexbox) grid system that helps you quickly build HTML5 user interface components and applications, which are easy to modify and maintain.

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

- Horizontal (X-axis) or vertical (Y-axis) grid layouts.
- Adaptive or equal size grid-cells.
- Fitted elements which only occupy the minimum required space.
- Alignment - both for grids in general as well as for the individual grid-cell elements.
- Gutters, i.e. spacing between elements, for both general and for individual elements.
- Grid-cell sizing.
- Grid-cell wrapping within a grid.
- Grid-cell scrolling.
- Grid-cell ordering.

Each `grid` element is a self-contained entity, which can be modified independently of its ancestors, i.e. if a grid is horizontally oriented (default behavior) a child grid can lay out its children vertically (using the `grid--y` modifier class) i.e.:
	
```html
<div class="grid">
    <!-- Default: Child elements are layed out along the X-axis -->

    <div class="grid-cell">I'm a child of the base horizontal grid</div>
    
    <div class="grid">
        <div class="grid-cell">I'm the 1st child of a nested horizontal grid (left)</div>
        
        <div class="grid-cell">I'm the 2nd child of a nested horizontal grid (right)</div>
    </div>
    
    <div class="grid grid--y">
        <!-- The "grid--y" modifier arranges the child elements in a Y-axis grid -->

        <div class="grid-cell">I'm the 1st child of a nested vertical grid (top)</div>
        
        <div class="grid-cell">I'm the 2nd child of a nested vertical grid (bottom)</div>
    </div>
</div>
```

> Flexboss supports the HTML `dir` property, e.g. `<body dir="ltr">` (left-to-right) or `<body dir="rtl">` (right-to-left) (can be any element), which defines the text direction. X-axis grids will be lay out accordingly, so the above example assumes a left-to-right layout.

Refer to the [documentation](#documentation) (see below) to get an overview of the full feature set and how to use it.

## Browser support
- Google Chrome
- Apple Safari (including Mobile Safari)
- Mozilla Firefox
- Microsoft Edge (Project Spartan)
- Microsoft Internet Explorer 11/IE11
- Microsoft Internet Explorer 10/IE10 (with limited support for scrollable grid-cell elements)

## Getting started
To get started, you can either:

- Install with Node Package Manager (NPM): `npm install flexboss`.
- Install with Bower package manager: `bower install flexboss`.
- Or download the `compiled/css/grid.css` file.

Once part of your project, you need to reference the compiled CSS-file or raw LESS-files, e.g.:

- Pure CSS:
    - Reference the CSS-file in the `<head>` section of your HTML, e.g.:

        ```html
        <link rel="stylesheet" href="path/to/css/grid.css" />
        ```
- LESS:
    - Reference the grid LESS files in a LESS-manifest (like the `/less/grid.less` manifest file), i.e.

        ```css
        @import '/path/to/flexboss/less/grid-core.less';
        @import '/path/to/flexboss/less/grid-ext.less';
        ```

You can now start using Flexboss, or grab a HTML5 boilerplate from the "boilerplates" folder to get foundation. 

### Variables
If you're using LESS, you can easily change the spacing/guttering between cells, i.e. the total distance between `grid-cell` elements when gutters are applied, by modifying the `@grid-cell-spacing` variable in the `/less/grid-vars.less` file.

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
