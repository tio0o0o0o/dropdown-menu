# EZ Dropdown v1.0.0

Easily create dropdown menus.

## Installation

Using npm:

```shell
$ npm i --save ez-dropdown
```

## Example usage

```html
<!-- Available dropdown-button classes: -->
<!-- dropdown-button-click -->
<!-- dropdown-button-toggle -->
<!-- dropdown-button-hover -->
<div class="dropdown-button-click" data-for="my-dropdown">Click me</div>
<!-- Must name content class as dropdown-content and provide an id for your button -->
<div class="dropdown-content" id="my-dropdown">
  <!-- Content goes here -->
</div>
```

```js
const { initializeDropdown } = require("ez-dropdown");

initializeDropdown();
```
