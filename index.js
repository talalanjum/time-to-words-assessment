/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable no-else-return */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
// expecting time to be a string in the format like '8:15' or '12:30'

const translator = [
  "o'clock",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "quarter",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty one",
  "twenty two",
  "twenty three",
  "twenty four",
  "twenty five",
  "twenty six",
  "twenty seven",
  "twenty eight",
  "twenty nine",
];

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  } else if (time === "12:00") {
    return "midday";
  }

  const hoursAndMinutes = time.split(":");

  const hourIndex =
    Number(hoursAndMinutes[1]) > 30
      ? Number(hoursAndMinutes[0]) + 1
      : Number(hoursAndMinutes[0]);

  const hour = translator[hourIndex];

  const keyword = Number(hoursAndMinutes[1]) > 30 ? " to " : " past ";

  let minutes = "";

  if (Number(hoursAndMinutes[1]) === 30) {
    minutes = "half";
  } else if (Number(hoursAndMinutes[1]) > 30) {
    minutes = translator[60 - Number(hoursAndMinutes[1])];
  } else {
    minutes = translator[Number(hoursAndMinutes[1])];
  }

  return minutes + keyword + hour;
}

module.exports = { convertTimeToWords };
