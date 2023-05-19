// 1: Show all DOM borders
[].forEach.call($$("*"), dom => {
    dom.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
});

// 2: Responsive pages
//The page is based on a design drawing but needs to be adapted to multiple models, and the element size is set using rem.
function AutoResponse(width = 750) {
    const target = document.documentElement;
    target.clientWidth >= 600
        ? (target.style.fontSize = "80px")
        : (target.style.fontSize = target.clientWidth / width * 100 + "px");
}

// 3: Filter XSS
function FilterXss(content) {
    let elem = document.createElement("div");
    elem.innerText = content;
    const result = elem.innerHTML;
    elem = null;
    return result;
}

// 4: Access LocalStorage
const love = JSON.parse(localStorage.getItem("love"));
localStorage.setItem("love", JSON.stringify("I Love You"));

/* Form Validation */
//HTML ships with several powerful validators:
<input required="true" /> //enforces the filling of the input
<input pattern="^\d{4}$" /> //validate the input against a given Regular Expression
<input type="email" /> //declare the type of the input
<input type="number" min="0" /> //check if the entered value is greater than or equal to the given value (work with numeric inputs)
<input type="number" max="10" /> //check if the entered value is less than or equal to the given value (work with numeric inputs)
<input type="number" step="1" /> //specify the legal number intervals for the entered value (work with numeric inputs)
<input type="file" accept=".png, .jpg"></input> // specify allowed file types

/* Audio */
//Audio is one of the important aspects of modern UX.
<audio id="click-audio">
  <source src="button-click.mp3" type="audio/mpeg" />
</audio>

//Then you can play the audio using Javascript
const audio = document.querySelector("#click-audio")
document.querySelectorAll("button")
  .forEach((button) => {
    button.onclick = () => audio.play()
  })


/* Picture Perfect */
//Art Direction is an excellent optimization technique that saves a huge amount of bandwidth by loading the optimally sized images based on some media queries. 
<picture>
    <source media="(max-width: 1200px)" srcSet="link-to-img" />
    <source media="(max-width: 2560px)" srcSet="link-to-img@2x" />
    <source media="(min-width: 2560px)" srcSet="link-to-imgl@3x" />
    <img src="link-to-img@3x" />
</picture>

//Another tool related to pictures is the map. The map tag is used to define a client-side image-map, enabling you to create mindblowing UX.
//An image-map is an image with clickable areas. All you have to do is mention the X and Y coordinates in the elements from the <map>
<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379" />
<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm" />
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm" />
</map>


/* Pre-formatted Text */
//Text in a pre element is displayed in a fixed-width font, and the text preserves both spaces and line breaks.
<pre>
Lorem
  Ipsum   dolor sit             amet.
</pre>


/* Editable element */
// In HTML, almost any element can be made editable using contenteditable="true"
<p contenteditable="true">This is an editable paragraph.</p>


/* Input Suggestions */
//Another valuable skill would be adding Input Suggestions without utilizing any other libraries or even JavaScript!
<input type="text" list="planets" />
<datalist id="planets">
    <option value="Mercury"></option>
    <option value="Venus"></option>
    <option value="Earth"></option>
    <option value="Mars"></option>
    <option value="Jupiter"></option>
    <option value="Saturn"></option>
    <option value="Uranus"></option>
    <option value="Neptune"></option>
</datalist>

/* Lazy loading images and iframes */
//Defer loading of images/iframes that are off-screen until the user scrolls near them.
<img src="image.webp" loading="lazy" />
<iframe src="game.html" loading="lazy"></iframe>

/* Embedding PDF files into HTML */
<object type="application/pdf" data="https://your_file.pdf">
  <iframe src="https://docs.google.com/gview?embedded=true&url=https://your_file.pdf"/>
</object>

/* Autocomplete */
<h1>Please Select a Vehicles:</h1>
<input type="text" list="auto-complete" />
<datalist id="auto-complete">
    <option value="Airplane"></option>
    <option value="Cars"></option>
    <option value="Motorcycle"></option>
    <option value="Bikes"></option>
    <option value="Taxi"></option>
    <option value="Bus"></option>
    <option value="Van"></option>
</datalist>

/* Expandable */
<details>
  <summary>More</summary>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum eos porro quam quis eum vero excepturi fugiat at! Amet praesentium voluptatum quae quo maxime temporibus molestias id ea omnis! Fuga, eos odio quo nesciunt dolorem, sequi
       obcaecati harum quibusdam cupiditate perferendis neque alias. Accusamus porro voluptas libero, iusto atque autem dolore commodi impedit consectetur nulla eum dolorem labore possimus. Commodi, odit at. Sed mollitia iure minus consequatur fuga
       architecto eos obcaecati dignissimos minima quis, fugit ipsa repudiandae id hic inventore repellat libero delectus culpa cum consectetur itaque molestiae quia. Doloribus repellendus saepe voluptatibus impedit facere. Non, suscipit quia voluptatem
       dolore magnam nemo repellendus assumenda, laudantium perspiciatis animi optio velit eveniet quam provident! Architecto reiciendis tempore assumenda minima necessitatibus obcaecati. Quo tenetur assumenda sit modi eaque velit ducimus quaerat
       nam. Deleniiusto, placeat ad neque eius! Fuga, quo dignissimos nihil repudiandae perspiciatis inventore amet veniam deserunt dolores tenetur.
    </p>
  </details>

/* Meter */
<label for="meter">Available Space: </label>
<meter value="20" max="100"></meter>

/* Progress */
<progress value="67" max="100"></progress>

/* Disable Right Click */
<body oncontextmenu="return false">
  <div></div>
</body>;

/* Get mouse position */
//The user’s mouse position is stored in the clientX and clientY properties on the built-in MouseEvent object.
document.addEventListener(type: 'mousemove', listener: (e: MouseEvent) => {
  console.log(`Mouse X: ${e.clientX}, Mouse Y: ${e.clientY}`)
})

/* Simulate the browser’s “back” and “forward” buttons */
<button onclick="window.history.back()">Back</button>
<button onclick="window.history.forward()">Forward</button>