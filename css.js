/* Horizontal and vertical center */
body {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}
div {
  background-color: grey;
  width: 100px;
  height: 100px;
}

/* Reset all CSS */
* {
  all: unset;
}

/* Lazy rendering anything */
.element {
  content-visibility: hidden;
}

/* Flex Box */
// 1. Making the parent container a flex container
.container { 
  display: flex; //make the parent container a flex container
  flex-direction: row; // set direction of the flexbox (row, column, row-reverse, column-reverse)
  flex-wrap: wrap; // specifies whether the flex items should wrap or not (wrap, nowrap, wrap-reverse)
  //flex-flow: row wrap // shorthand property for setting both flex-direction and flex-wrap
  justify-content: flex-start; // align the flex-items on the horizontal axis (flex-start, center, flex-end, space-between, space-around)
  align-items: stretch // align the flex-items on the y-axis (flex-start, center, flex-end, baseline, stretch)
  align-content: // align the rows in the flex container (flex-start, center, flex-end, space-between, space-around, stretch)
}
// 2. Properties applied on a flex-item
.item { 
  order: 2; //the order is the sequence of the flex items in which they are displayed in the flex container (default = 0)
  flex-grow: 1; // specify how much a flex item should grow relative to the rest of the flex items (default = 0)
  flex-shrink: 0 // specifies how much a flex item will shrink relative to the rest of the items in the flex container (default = 1), 0 => item won't shrink
  flex-basis: 300px; // initial length of a flex item
  //flex //shorthand property to specify flex-grow, flex-shrink, and flex-basis properties
  align-self: center; //specifies the alignment of the specific item inside the flex-container (it overrides the property align-items specified on the flex container)
}

/* Grid */
// 1. Making the parent container a grid container
.container { 
  display: grid; 
  grid-template-rows: repeat(4, 1fr); //defines the number and width of rows in your grid layout (4 columns of equal width)
  grid-template-columns: repeat(3, 1fr); //defines the number and width of columns in your grid layout (3 columns of equal width)
  //grid-template-columns: 20px 100px 200px 100px;
  column-gap: 30px; //adds the specified space between the columns
  row-gap: 20px; //adds the specified space between the rows
  //gap: 10px 20px; //shorthand both column and row gap gap
  justify-content: space-evenly; // horizontally align the whole grid (space-around, space-between,space-evenly, center, start, end)
  align-content: center; //vertically aligns the whole grid (space-evenly, space-around, space-between, start, end, center)
}
// 2. Properties applied on a grid-item
.item { 
  grid-column: 1 / 5; // set the start and end column of an element in the grid container (1 / 5 means the item starts at grid column line 1 and ends at grid column line 5)
  grid-row: 1 / 2; // set the start and end row of a grid item
  //grid-area: 1 / 1 / 2 / 5; // shorthand property for grid-column and grid-row (grid-row-start / grid-column-start / grid-row-end / grid-column-end)
}

/*How to define and use CSS variables? */
//To define a CSS variable in the global scope:
:root { --bg-color: green; }
//To use a CSS variable in global scope:
element { 
  background-color: var(--bg-color); 
}
//To get the above variable using JavaScript:
getComputedStyle(document.body).style.getPropertyValue('--bg-dark')
//Override a CSS variable using JavaScript
document.documentElement.style.setProperty('--bg-dark', '#787898');

/* CSS calc() function */
//CSS calc() function helps to make simple calculation in CSS, like calculating the width of an HTML element by solving a mathematical expression
.div { 
  width: calc(100% - 100px) 
}