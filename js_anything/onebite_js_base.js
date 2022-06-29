// Inflearn - 한입 크기로 잘라 먹는 리액트(React.js) 강의를 듣고 코드 및 내용을 메모합니다.
// Section 1. Javascript 기본

// ** 변수와 상수 **

// [변수명 규칙]
// 1. 변수명에 기호 사용 x but, '_', '$' 기호만 가능
// let age_$ = 10;

// 2. 변수명 시작을 숫자로 하면 X
// let 5age = 10;

// 3. 변수명으로 예약어 사용 X
// let if = 10;

// let은 변수 여러번 선언 X
let age1 = 10;
let age2 = 20;

// const 상수 -> 선언 이후에 값 변경 X
const age3 = 10;
age = 20;

// 선언과 동시에 초기화가 이루어지지 않아도 error
// -> 상수는 선언 이후 값 변경 X
// const age;
// age = 20;

// --------------------------------

// ** 자료형과 형 변환 **

// [원시 타입(Primitive Type)]
// : 한번에 하나의 값만 가질 수 있음
// : 하나의 고정된 저장 공간 이용

// 숫자형
let number = 10; // 정수
let tall = 170.1; // 실수
let inf = Infinity; // 무한대
let minusInf = -Infinity; // 음의 무한대
let nan = NaN; // 연산이 잘못 수행되었을 때 (수학적 연산 실패)

// 문자형
// "", '', `` 가능
let name = "beanxx";
let name2 = `My name is ${name2}`; // ${} 안에 변수 담아서 사용 가능 -> Template literal

// null
let a = null; // 실제로 null 값을 대입해주어야 함 (의도적으로 이 값은 아무것도 안 담고 있다를 의미할 때 사용)

// undefined
let variable; // 아무 값도 할당하지 않았을 때 -> 자동으로 undefined 값을 할당받게 됨

// [형변환]
let num10 = 10;
let num20 = 3;
console.log(num1 * num2); // 30

let num100 = 10;
let num200 = "3";
console.log(num1 * num2); // 30 <- js가 문자열 2을 자동으로 숫자 2로 인지하여 계산

let num1 = 10;
let num2 = "3";
console.log(num1 + num2); // 103 <- 숫자를 문자열로 변환
console.log(num1 + parseInt(num2)); // 13
// parseInt(): 문자열 값을 받아서 숫자로 변환해줌

// => 의도적 형변환: '묵시적 형변환' (testing)

// [비원시 타입 (Non-Primitive Type)]
// : 한번에 여러 개의 값을 가질 수 있음
// : 여러 개의 고정되지 않은 동적 공간 사용
let array = [1, 2, 3, 4];

// --------------------------------

// ** 연산자 **

// [증감 연산자]
// 전위 연산자
let b = 20;
console.log(++b); // 21
console.log(--b); // 20

// 후위 연산자
let c = 10;
c++;
console.log(c); // 11

let d = 10;
console.log(d++); // 10
console.log(d); // 11

let compareA = 1 == "1"; // =: 대입 연산자, ==: 비교 연산자(값만 비교) => true
let compareB = 1 === "1"; // ===: 값과 타입까지 비교하므로 => false
let compareC = 1 != "1"; // 값만 비교 -> 값은 같으므로 '값이 같지 않다' => false
let compareD = 1 !== "1"; // 값과 타입 둘 다 비교 -> 타입이 다르므로 '같지 않다' => true

// 안전한 비교를 위해 타입까지 비교하는 ===, !== 사용 권장

// Null 병합 연산자(null, undefined 값이 아닌 값을 선택)
let e;
e = e ?? 10; // e는 undefined 이므로 10을 선택
console.log(e); // 10

// --------------------------------

// ** 조건문 **
// switch 조건문에서 case에 break를 안 써주면 모든 코드 실행 => break로 끊어줘야 원하는 코드만 실행 가능
let country = "ko";

switch (counter) {
  case "ko":
    console.log("한국");
    break;
  case "jp":
    console.log("일본");
    break;
  case "uk":
    console.log("한국");
    break;
  default:
    console.log("etc");
    break;
}

// --------------------------------

// ** 함수 **

let count = 1;

// [함수 선언식] 함수 선언 방식의 함수 생성
function getArea(width, height) {
  let area = width * height;
  console.log(count); // 함수 밖의 변수는 함수 내부에서 사용 가능 -> 전역변수
  return area;
}

let area1 = getArea(10, 20); // 함수 호출
console.log(area1); // 200
console.log(area); // Error (함수 내부에서 선언한 변수는 함수 바깥에서 접근 X -> 지역변수)

// [함수 표현식]
let hello = function () {
  return "Hello";
};

const helloText = hello();
console.log(helloText); // Hello

// [Hoisting]
console.log(helloB()); // HelloB => 함수 선언식을 제일 밑에서 선언해도 위에서 사용 가능 -> 함수 선언식에서 호이스팅(Hoisting) 발생
console.log(helloA()); // Error => 함수 표현식에서는 호이스팅이 일어나지 않아 에러 발생

let helloA = function () {
  return "HelloA";
}; // 함수 표현식

console.log(helloA()); // HelloA => 함수 표현식은 함수 선언 후에 호출해야 사용 가능

function helloB() {
  return "HelloB";
} // 함수 선언식

// 화살표 함수 -> 호이스팅의 대상이 아님
let helloC = () => {
  return "HelloC";
};
// 위와 같은 코드로써, return문이 1줄일 때 {}, return 생략 가능
// let helloC = () => 'HelloC';

// 즉, 함수 선언식에서만 호이스팅 발생!!

// --------------------------------

// ** 콜백함수 **
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

function cry() {
  console.log("ACTION :: CRY");
}

function sing() {
  console.log("ACTION :: SING");
}

function dance() {
  console.log("ACTION :: DANCE");
}

checkMood("sad", sing, cry);

// --------------------------------

// ** 객체 **

// [객체 생성 방법]
// 1. 객체 생성자
let person = new Object();

// 2. 객체 리터럴 방식 (객체 생성자 이용 방법보다 만들기 편리)
// 모든 자료형들을 property value로 사용 가능
let person2 = {
  key1: "value", // property (객체 프로퍼티): 객체가 가지고 있는 데이터
  key1: 123, // key가 중복되었을 때 가장 뒤에 있는 property를 기준으로 앞의 property는 무시
  key3: true,
  key4: undefined,
  key5: [1, 2],
};
// key는 반드시 문자열로 이루어져야 함! but, "" 사용 X

person2.say(); // Hi <- 요렇게 객체 안의 함수를 불러올 수 있음

console.log(person2.key1); // 123 <= 점 표기법으로, key를 통해 value 값을 가져옴
console.log(person2["key3"]); // true <= 괄호 표기법으로, key 자리에 반드시 ""를 통해 문자열을 넣어주어야 함

// [괄호 표기법 사용이 편리한 경우]
// => 동적인 파라미터 전달받는 상황, 키를 꺼내야 하는데 그 키가 고정되어 있지 않은 상황
let person3 = {
  // let 대신 const로 선언한 후, property를 추가 및 수정해도 괜츈 <= why?? person3 자체를 수정하는 것이 아닌 object를 수정하는 것이므로
  name: "Beanxx", // member
  age: "24", // memer
  say: function () {
    console.log(`Hi, I'm ${this.name}`); // 여기서 this는 자기 자신 객체를 의미 즉, this.name = person3.name
  }, // 객체 안에 있는 함수: 메서드 -> 방법  <-> 함수가 아닌 property: member
};

// in 연산자를 통해 해당 key가 객체에 존재하는지 true/false로 확인 가능
console.log(`name: ${"name" in person3}`); // name: true
console.log(`name: ${"gender" in person3}`); // gender: false

// property 추가
person3.location = "Korea";
person3["gender"] = "Female";

// property 수정 (원래 객체 안에 key가 존재할 땐 수정)
person3.name = "Beanxyz";
person3["age"] = 10;

// property 삭제
delete person.name; // property와의 연결을 끊을 뿐 실제 메모리에선 값이 지워지지 않음
person.name = null; // 삭제한 것과 같은 효과 (메모리에서도 값을 날릴 수 있음)

console.log(getThing("name")); // Beanxx

function getThing(key) {
  return person3[key];
}

// --------------------------------

// ** 배열 **
let arr = []; // 배열 리터럴
let arr1 = [1, "2", true, null, undefined, {}, [], function () {}]; // 값으로 아무 자료형이 들어가도 괜츈

let arr2 = [1, 2, 3];
arr.push(4); // 배열 가장 마지막 요소에 추가
console.log(arr); // [1, 2, 3, 4]

// --------------------------------

// ** 반복문 **

// [객체 반복]
const personKeys = Object.keys(person);

// 배열처럼 객체 순회
for (let i = 0; i < personKeys.length; i++) {
  const curKey = personKeys[i]; // 객체의 각각의 key를 불러올 수 있음.
  const curValue = person[curKey]; // 객체의 각각의 key에 해당하는 value를 불러올 수 있음.

  console.log(`${curKey} : ${curValue}`);
}

// 객체의 value만 순회
const personValues = Object.values(person);

for (let i = 0; i < personValues.length; i++) {
  console.log(personValues[i]);
}

// --------------------------------

// ** 배열 내장 함수 **
const arr3 = [1, 2, 3, 4];
const newArr = [];

// for문 기능과 유사
arr.forEach((el) => console.log(el * 2)); // 단순히 출력일 뿐 배열에 저장하고 있지는 않음

arr.forEach(function (el) {
  newArr.push(el * 2);
});
console.log(newArr); // [2, 4, 6, 8]

// [map() 메서드]
// : 원본 배열의 모든 요소를 순회하면서 어떤 연산을 해서 return된 값들만을 따로 배열로 추려내서 반환을 할 수 있게 해주는 함수
const newArr2 = arr.map((el) => {
  return el * 2;
});

let num3 = 3;
console.log(arr.includes(num3)); // true
console.log(arr.indexOf(num3)); // 2 <= 배열의 index를 반환

let str3 = "3";
console.log(arr.includes(str3)); // false <= 즉, === 비교 연산를 통해 값을 찾음
console.log(arr.indexOf(str3)); // -1  <= 주어진 값과 배열 내에 일치하는 값이 하나도 없을 경우 -1 return

const colorArr = [
  { color: "red" },
  { color: "blue" },
  { color: "green" },
  { color: "black" },
];

// 배열 내의 객체 요소의 index 찾기 => findIndex() 메서드 사용
// true를 반환하는 첫번째 요소를 반환
const idx = colorArr.findIndex((el) => {
  el.color === "green";
}); // 2

// 배열 내의 객체 요소 즉, element 자체 찾기 => find() 메서드 사용
const element = colorArr.find((el) => {
  return el.color === "blue";
}); // {color:'blue'}

// [filter() 메서드]
const numColorArr = [
  { num: 1, color: "red" },
  { num: 2, color: "blue" },
  { num: 3, color: "green" },
  { num: 4, color: "black" },
  { num: 5, color: "blue" },
];

const numColorArr2 = [
  { num: 6, color: "pink" },
  { num: 7, color: "yellow" },
];

// color key가 'blue'인 객체 요소를 배열에 모두 출력 => [Object, Object]
console.log(numColorArr.filter((el) => el.color === "blue"));
console.log(numColorArr.slice()); // 배열 그대로 반환 (아무 일도 일어나지 않음)

console.log(numColorArr.concat(numColorArr2)); // 하나의 배열로 붙여서 반환

// [배열 정렬]
// sort(): 원본 배열의 순서를 정렬 <- 숫자 기준이 아닌 문자열 기준으로 정렬
let chars = ["나", "다", "가"];
chars.sort();
console.log(chars); // ['가', '나', '다']

let numbers = [0, 3, 2, 30, 15];
// numbers.sort(); 로 정렬시 문자열 기준으로 즉, 사전식으로 정렬하므로 [0, 15, 2, 3, 30]
// 문자열이 아닌 숫자로 비교하여 정렬하려면 함수를 따로 만들어주어서 정렬해주기

// 오름차순 정렬 함수
const compare = (a, b) => {
  if (a > b) {
    // 크다
    return 1; // -1 <- 내림차순으로 정렬
  }

  if (a < b) {
    // 작다
    return -1; // 1 <- 내림차순으로 정렬
  }

  // 같다
  return 0;
};

numbers.sort(compare);
console.log(numbers); // [0, 2, 3, 15, 30]

// [join() 메서드]
const joinArr = ["Nice", "to", "meet", "you"];
console.log(joinArr.join()); // Nice, to, meet, you
console.log(joinArr.join(" ")); // Nice to meet you
