
// Solution 1a
v-on="enableClick ? { click: clickHandler } : {}"

// Solution 1b
v-on="enableClick ? { click: () => clickHandler(params) } : {}"

// Solution 2a
@[eventName]="clickHandler"

// Solution 2b
@[isClickable&&`click`]="clickHandler"

// Solution 3
@click="enableClick && clickHandler"