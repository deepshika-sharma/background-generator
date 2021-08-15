let left = document.getElementById("left");
let right = document.getElementById("right");
let body = document.getElementById("body");
let p = document.querySelector("p");
let random = document.querySelector(".random");

body.style.background = `linear-gradient(to right, ${left.value}, ${right.value})`;
p.innerText = `linear-gradient(to right, rgb(0,255,0), rgb(0,0,255))`;

left.addEventListener("input", changeBackground);

right.addEventListener("input", changeBackground);

random.addEventListener("click", () => {
  let red1 = randomColors();
  let green1 = randomColors();
  let blue1 = randomColors();
  let red2 = randomColors();
  let green2 = randomColors();
  let blue2 = randomColors();

  body.style.background = `linear-gradient(to right, rgb(${red1}, ${green1}, ${blue1}), rgb(${red2}, ${green2}, ${blue2}))`;

  p.innerText = `linear-gradient(to right, rgb(${red1}, ${green1}, ${blue1}), rgb(${red2}, ${green2}, ${blue2}))`;

  // console.log(rgbToHex(red1, green1, blue1));

  left.value = rgbToHex(red1, green1, blue1);
  right.value = rgbToHex(red2, green2, blue2);
});

function changeBackground() {
  let { leftred, leftgreen, leftblue, rightred, rightgreen, rightblue } =
    hexToRgb();

  body.style.background = `linear-gradient(to right, rgb(${leftred}, ${leftgreen}, ${leftblue}), rgb(${rightred}, ${rightgreen}, ${rightblue}))`;

  p.innerText = `linear-gradient(to right, rgb(${leftred}, ${leftgreen}, ${leftblue}), rgb(${rightred}, ${rightgreen}, ${rightblue}))`;

  if (leftred < 150 && leftgreen < 150 && leftblue && 150) {
    body.style.color = "whitesmoke";
  } else {
    body.style.color = "black";
  }
  if (rightred < 150 && rightgreen < 150 && rightblue < 150) {
    body.style.color = "whitesmoke";
  } else {
    body.style.color = "black";
  }

  //   textColor();
}

function hexToRgb() {
  rightval = right.value.split();
  leftval = left.value.split();

  //   console.log(rightval);
  //   console.log(leftval);
  let hexVals = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  let leftred = hexVals[leftval[0][1]] * 16 + hexVals[leftval[0][2]];
  let leftgreen = hexVals[leftval[0][3]] * 16 + hexVals[leftval[0][4]];
  let leftblue = hexVals[leftval[0][5]] * 16 + hexVals[leftval[0][6]];

  let rightred = hexVals[rightval[0][1]] * 16 + hexVals[rightval[0][2]];
  let rightgreen = hexVals[rightval[0][3]] * 16 + hexVals[rightval[0][4]];
  let rightblue = hexVals[rightval[0][5]] * 16 + hexVals[rightval[0][6]];

  //   console.log(rightred, rightgreen, rightblue);
  return { leftred, leftgreen, leftblue, rightred, rightgreen, rightblue };
}

function rgbToHex(red, green, blue) {
  let hexVals = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };

  let str = "#";
  let r1 = Math.floor(red / 16);
  str += hexVals[r1];
  let r2 = red % 16;
  str += hexVals[r2];
  let g1 = Math.floor(green / 16);
  str += hexVals[g1];
  let g2 = green % 16;
  str += hexVals[g2];
  let b1 = Math.floor(blue / 16);
  str += hexVals[b1];
  let b2 = blue % 16;
  str += hexVals[b2];

  return str;
}

function randomColors() {
  let val = Math.floor(Math.random() * 255 + 1);
  return val;
}
