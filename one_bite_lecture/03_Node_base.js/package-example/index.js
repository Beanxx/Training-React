// 외부 모듈 randomColor 사용해보기!
// import the script
const randomColor = require("randomcolor"); // 외부 모듈은 경로를 명시 안 해줘도 됨

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);
