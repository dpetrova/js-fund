// 1: Compare time
const time1 = "2022-03-02 09:00:00";
const time2 = "2022-03-02 09:00:01";
const overtime = time1 < time2; // true

// 2: Format money
const ThousandNum = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(1000000); // '1,000,000'

// 3: Generate random ID
const RandomId = (len) => Math.random().toString(36).substr(3, len);
const id = RandomId(10); // "xdeguewg1f"

// 4: Generate random HEX color values
const RandomColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");
const color = RandomColor(); // "#2cbf89"

// 5: Generate star ratings
const StartScore = (rate) => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(3); // '★★★☆☆'

// 6: URL query parameters
const params = new URLSearchParams(location.search.replace(/\?/gi, "")); // location.search = "?name=test&sex=man"
params.has("test"); // true
params.get("sex"); // "man"
