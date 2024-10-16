// Udemy - 'React 완벽 가이드 with Redux, Next.js, TypeScript' 강의를 듣고 코드 및 내용을 메모합니다.
// Section 2. Javascript 새로고침

// 화살표 함수 간단히 한 줄에 쓰기!
// 매개변수가 1개일 땐 () 생략 가능 but, 매개변수가 아예 없을 땐 ()만이라도 써줘야 함
// 한 줄에 쓸 땐 return은 쓰지 않기
const multiply = (number) => number * 2;

// [Exports & Imports (Modules)]
export default person;
import person from "./person.js";
import prs from "./person.js"; // person.js의 default 참조하지만 prs처럼 이름이 달라도 괜츈

// named export
// default로 지정하지 않았기 때문에 정확한 이름을 중괄호{} 사이에 입력해야 함
export const clean = () => {};
export const baseData = 10;
import { baseData } from "./utility.js";
import { clean } from "./utility.js";
import { smth as Sm } from "./utility.js"; // as: 자유롭게 선택할 수 있는 별칭 할당 가능
import * as bundled from "./utility.js"; // 한 파일에 여러 named export가 있는 경우 -> *를 사용해서 모든 것을 import할 수 있음
// 위와 같은 경우엔 bundled.baseData, bundled.clean과 같이 접근하면 됨

// [Class]
class Person {
  // ES6 문법
  // 기존 property 문법
  constructor() {
    this.name = "Beanxx";
  }

  // 기존 property 문법
  call() {
    // ...
  }

  // ES7문법
  name = "Beanxx"; // Property: 클래스에 정의한 변수
  // 위처럼 클래스에 바로 property 할당 가능 & 생성자 함수를 호출하지 않아도 됨

  call = () => {}; // Method: 클래스에 정의한 함수 (값으로 함수를 저장하는 property)
  // 위에서 화살표 함수를 사용했기 때문에 this 키워드를 사용하지 않아도 됨
}

// Usage
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);

// Inheritance
// class Person extends Master

// 클래스 예제
// js 문법
class Person extends Human {
  // Human class를 상속받음
  constructor() {
    super(); // 서브 클래스에서는 super 생성자를 먼저 호출해야 함
    // super 키워드는 상위클래스의 생성자함수 실행
    this.name = "Max";
    this.gender = "female"; // 상위클래스에 존재하는 property지만 Person클래스에서 확장해서 사용
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); // "Max"
person.printGender(); // "female"

// ES6 / Babel 문법
// 위의 클래스 예제를 ES6/Babel 문법으로 변경
// this와 생성자 함수를 사용하지 않아도 됨!
class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person2 extends Human {
  name = "Max";
  gender = "female";

  printMyName = () => {
    console.log(this.name);
  };
}

const person2 = new Person2();
person2.printMyName(); // "Max"
person2.printGender(); // "female"

// [Spread & Rest Operators]
// Spread: 배열의 원소나 객체의 프로퍼티를 나누는데 사용 => 배열이나 객체를 펼쳐 놓음
const newArray = [...oldArray, 1, 2]; // oldArray 배열에 1, 2 요소 추가해서 newArray에 할당
const newObject = { ...oldObject, newProp: 5 }; // 위와 같은 방식으로 객체에 적용

// Rest: 함수의 arguments 목록을 배열로 합치는데 사용
function sortArgs(...args) {
  // 매개변수(argument)를 무제한으로 받음
  return args.sort();
}

// spread example
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // [1, 2, 3, 4]
const newNumbers2 = [numbers, 4]; // [[1, 2, 3], 4]

const person3 = {
  name: "Beanxx",
};

const newPerson = {
  ...person3,
  age: 24,
};

console.log(newPerson3);
// [object Object] {
//   age: 24,
//   name: "Beanxx"
// }

// Rest 연산자를 생성해서 배열 필터링
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
// filter는 배열에서 전달되는 모든 원소들에 대해 함수를 실행
// => 원소를 전달하고 조건에 맞으면 true, 아니면 false 반환

console.log(filter(1, 2, 3)); // [1]

// [Destructuring(구조분해할당)]
// : 배열의 원소나 객체의 프로퍼티를 추출해서 변수에 저장할 수 있도록 해줌

// spread 연산자와 비슷하다고 생각할 수 있지만 차이점이 있음!
// spread는 '모든' 원소와 프로퍼티를 가져와서 새 배열이나 객체에 전달
// 구조분해할당은 원소나 프로퍼티를 '하나'만 가져와서 변수에 저장

// Array Destructuring
[a, b] = ["Hello", "Beanxx"];
console.log(a); // Hello
console.log(b); // Beanxx
// 배열을 새로 생성하는 것처럼 보이지만 사실은 변수 a, b에 Hello, Max를 각각 할당해준 것!

// Object Destructuring
// {name} = {name.'Beanxx', age: 24}
// console.log(name) // Beanxx
// console.log(age) // undefined <- 객체에서 age를 추출하지 않기 때문

const nums = [1, 2, 3];
[num1, num2] = nums;
console.log(num1, num2); // 1 2

[num1, , num3] = numbers; // 원소 1, 3을 추출하려면 가운데 원소2 자리는 ,로 비워줌
console.log(num1, num3); // 1 3

// [참조형 및 원시형 데이터 타입]

// 원시형 데이터 타입: 재할당하거나 변수를 다른 변수에 저장할 때마다 값을 복사 (number, string, boolean)
// 참조형 데이터 타입: 아래 예시에서 객체 firstPerson는 메모리에 저장되어 있고, 상수(const) firstPerson에는 메모리에 있는 주소를 가리키는 포인터를 저장 (객체, 배열)
const firstPerson = {
  name: "Beanxx",
};

const secondPerson = firstPerson; // 값 복사가 아닌, 포인터 복사
// const secondPerson = {
//   ...firstPerson  // 포인터가 아닌 진짜 복사본 생성 -> firstPerson 값을 바꿔도 요기엔 영향을 주지 않음.
// }

firstPerson.name = "Beanxyz"; // firstPerson 프로퍼티를 바꿔도 secondPerson는 firstPerson이 가리키는 메모리에 있는 동일한 객체를 가리키기 떄문에 바뀐 값이 출력됨
console.log(secondPerson); // firstPerson의 객체 출력

// => 만약 재할당한다면, 값이 아닌 포인터를 복사하는 것!
// => 진짜로 복사하고 싶다면, 새로운 객체를 생성해서 전체 객체를 복사하는 것이 아니라 프로퍼티를 복사해야 함!

// map(): 예전 값을 새 값으로 반환 (모든 원소에 대해 실행) / 이전 배열은 변경되지 않음
const numb = [1, 2, 3];

const doubleNumArray = numb.map((num) => {
  return num * 2;
});

console.log(numb); // [1, 2, 3]
console.log(doubleNumArray); // [2, 4, 6]

// Import JS Array functions!
// 1. map()
// 2. find()
// 3. findIndex()
// 4. filter()
// 5. reduce()
// 6. concat()
// 7. slice()
// 8. splice()
