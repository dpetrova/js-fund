// 1: Arrangement
//Substitute Math.floor() for positive numbers and Math.ceil() for negative numbers
const num1 = ~~1.19; //1
const num2 = 2.29 | 0; //2
const num3 = 3.09 >> 0; //3

// 2: Zero padding
const FillZero = (num, len) => num.toString().padStart(len, "0");
const num = FillZero(1234, 5); // "01234"

// 3: The unary + or - operator converts its operand to Number type
const num1 = +null; //0
const num2 = +""; //0
const num3 = +false; //0
const num4 = +"169"; //169
const num5 = +{}; // NaN
const num6 = +undefined; // NaN
const num7 = +{ valueOf: () => 67 }; // 67
const num8 = +"nnamdi45"; // NaN
const num9 = -"23"; // -23
const num10 = -{}; // NaN
const num11 = -null; // -0
const num12 = -{}; // NaN
const num13 = -undefined; // NaN

// 4: Timestamp
const timestamp = +new Date("2022-03-22"); // 1647907200000

// 5: Exact decimal
const RoundNum = (num, decimal) =>
  Math.round(num * 10 ** decimal) / 10 ** decimal;
const num = RoundNum(1.2345, 2); // 1.23
//or
const num = parseFloat("123.456").toFixed(2); //123.45
//or
Math.round(num * 100) / 100;
//or
Math.round((num + Number.EPSILON) * 100) / 100; //to be more specific and to ensure things like 1.005 round correctly

// 6: Parity
const OddEven = (num) => (!!(num & 1) ? "odd" : "even");
const num = OddEven(2); // "even"

// 7: Take min max
const arr = [0, 1, 2, 3];
const min = Math.min(...arr); //0
const max = Math.max(...arr); //3

// 8: Generate range random numbers
const RandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const num = RandomNum(1, 10); // 5
