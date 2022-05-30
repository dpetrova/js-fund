/* Behavioral Design Patterns */
//Behavioral Design Patterns are specifically concerned with communication between objects.

/* Strategy */
//This pattern enables you to switch between techniques/algorithms for a specific task at runtime without the client knowing it.
//Rather than implementing a single method directly, the code is given runtime instructions that tell it which of the group of algorithms to run.
//The “Open-Closed design principle” which argues that base code should be open for extension but closed for modification.
//One way to achieve the open-closed principle is to use the strategy pattern.

//We will take an example in which we have a text processor that will display data list based on strategy(HTML or Markdown).

let OutputFormat = Object.freeze({
  markdown: 0,
  html: 1,
});

class ListStrategy {
  start(buffer) {}
  end(buffer) {}
  addListItem(buffer, item) {}
}

class MarkdownStrategy extends ListStrategy {
  addListItem(buffer, item) {
    buffer.push(` * ${item}`);
  }
}

class HtmlStrategy extends ListStrategy {
  start(buffer) {
    buffer.push(`<ul>`);
  }
  end(buffer) {
    buffer.push(`</ul>`);
  }
  addListItem(buffer, item) {
    buffer.push(` <li>${item}</li>`);
  }
}

//Creating TextProcessor class
class TextProcessor {
  constructor(format) {
    this.buffer = [];
    this.setOutputFormat(format);
  }
  setOutputFormat(format) {
    switch (format) {
      case OutputFormat.html:
        this.listStrategy = new HtmlStrategy();
        break;
      case OutputFormat.markdown:
        this.listStrategy = new MarkdownStrategy();
        break;
    }
  }
  appendList(items) {
    this.listStrategy.start(this.buffer);
    for (const item of items) {
      this.listStrategy.addListItem(this.buffer, item);
    }
    this.listStrategy.end(this.buffer);
  }
  clear() {
    this.buffer = [];
  }
  toString() {
    return this.buffer.join("\n");
  }
}

//That’s how we will use this
let tp = new TextProcessor();
tp.setOutputFormat(OutputFormat.markdown);
tp.appendList(["one", "two", "three"]);
console.log(tp.toString());

tp.clear();
tp.setOutputFormat(OutputFormat.html);
tp.appendList(["one", "two", "three"]);
console.log(tp.toString());
