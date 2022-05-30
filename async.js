// in ES2022 you can use await directly in code outside of the function
// - it allows to load modules dynamically:
const serviceName = await fetch(
  "https://example.com/what-service-should-i-use"
);
const service = await import(`/services/${serviceName}.js`);
const params = new URLSearchParams(location.search);
const theme = params.get("theme");
const stylingFunctions = await import(`/styling-functions-${theme}.js`);
// - it allows to conditionally render modules:
const date = new Date();
if (date.getFullYear() === 2023) {
  await require("/special-code-for-2023-year.js");
}
