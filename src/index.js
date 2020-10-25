const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let result = [];

  for (i = 0; i < expr.length; i += 10) {
    let temp = "";

    for (let j = 0; j < 10; j += 2) {
      if (expr[i + j] + expr[i + j + 1] === "**") {
        temp += " ";
      }
      if (expr[i + j] + expr[i + j + 1] === "10") {
        temp += ".";
      }
      if (expr[i + j] + expr[i + j + 1] === "11") {
        temp += "-";
      }
    }
    result.push(temp);
  }
  return result
    .map((item) => (MORSE_TABLE[item] ? MORSE_TABLE[item] : " "))
    .join("");
}

module.exports = {
  decode,
};
