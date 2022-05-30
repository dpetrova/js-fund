/* Sort with compareFunction */
let strings = ["nop", "NOP", "ñop", "abc", "abc", "äbc"];

// compare strings with locale in mind
strings.sort((a, b) => a.localeCompare(b));
console.log(strings); // ['abc', 'abc', 'äbc', 'nop', 'NOP', 'ñop']

// language-sensitive string comparison using Intl.Collator
const collator = new Intl.Collator("en");
// const collator = new Intl.Collator('en', {
//     sensitivity: 'base',     // base, accent, case, variant
//     caseFirst: 'upper',      // upper, lower, false
//     usage: 'sort',           // sort, search
//     ignorePunctuation: true, // true, false
//     numeric: true,           // true, false
//   });
strings.sort((a, b) => collator.compare(a, b));
console.log(strings); // ['abc', 'abc', 'äbc', 'nop', 'NOP', 'ñop']

/* Sort Number Arrays */
[0, 10, 4, 9, 123, 54, 1].sort((a, b) => a - b); // [0, 1, 4, 9, 10, 54, 123]

/* Disable Right Click */
<body oncontextmenu="return false">
  <div></div>
</body>;
