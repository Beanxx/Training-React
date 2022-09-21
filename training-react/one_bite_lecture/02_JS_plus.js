// // Inflearn - 한입 크기로 잘라 먹는 리액트(React.js) 강의를 듣고 코드 및 내용을 메모합니다.
// Section 2. Javascript 응용

// ** Truthy & Falsy **

// Truthy -> true
let a = "0";
let b = [];
let c = {};
let d = "false";
let e = Infinity;

// Falsy -> false
let f = null;
let g = undefined;
let h = 0;
let i = -0;
let j = NaN;
let k = "";

const getName = (person) => {
  if (person === undefined || person === null) {
    // 이처럼 하나하나 예외처리해주기 어려움
    return "Not Object!";
  }

  // if(!person) => if(!person === true) <- 즉, person이 false임을 의미
  if (!person) {
    // false NOT => True 즉, 이처럼 falsy값을 통해 예외처리를 해줄 수 있음
    return "Not object!";
  }

  return person.name;
};

let person = { name: "Beanxx" };
const names = getName(person);
console.log(names); // Beanxx
// let person; -> 예외처리를 안 해줬을 땐 에러 발생 / if문으로 예외처리시 -> Not Object! 출력
// let person = null -> 위와 같음

// --------------------------------

// ** 삼항연산자 **
// 조건식 ? 참일 때 수행할 식 : 거짓일 때 수행할 식;
let aa = [];
aa.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");
const arrayStatus = aa.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus); // 빈 배열

let aaa; // 값을 할당하지 않았으므로 undefined -> falsy값
const result = aaa ? true : false;
console.log(result); // false

// 중첩 삼항연산자
// 가독성을 해치기 때문에 되도록 사용 지양 -> 오히려 if문으로 작성하는게 낫다!
let score = 50;
score >= 90 ? "A+" : score >= 50 ? "B+" : "F";

// --------------------------------

// ** 단락회로 평가 **
// : 뒤의 연산을 확인할 필요없이 연산을 끝내버리는 것
false && true; // AND 연산자는 하나만 false여도 false이기 때문에 앞에가 false이면 뒤 연산은 확인하지 않아도 됨
true || false; // OR 연산자는 하나만 true여도 true이기 때문에 앞에가 true이면 뒤 연산은 확인하지 않아도 됨

const getName2 = (person) => {
  // if (!person) {
  //   return '객체가 아닙니다.';
  // }
  // return person.name;

  // 위의 내용을 단락회로 평가로 작성
  // 앞쪽이 falsy하다면 person을 그대로 return
  const name = person && person.name; // person2가 null이면 name = person
  return name || "객체가 아닙니다."; // person2가 null이면 falsy값이므로 '객체가 아닙니다.' return
};

let person2 = null;
const name2 = getName(person2);
console.log(name2);

// --------------------------------

// ** 조건문 Upgrade **
const meal = {
  Korea: "비빔밥",
  China: "멘보샤",
  Japan: "초밥",
  India: "카레",
};

const getMeal = (mealType) => {
  return meal(mealType) || "Hungry..";
};

console.log(getMeal("Japan")); // 초밥
console.log(getMeal()); // Hungry..

// --------------------------------

// ** 비 구조화 할당 **
// 배열의 비구조화 할당: 배열의 값을 순서대로 할당받아서 사용할 수 있는 방법
let [one, two, three, four = "four"] = ["one", "two", "three"]; // 배열의 선언분리 비구조화 할당
console.log(one, two, three, four); // four는 undefined -> 기본값 설정

// swap
let a1 = 10;
let b1 = 20;

let temp = a1;
a1 = b1;
b1 = temp;
console.log(a1, b1);

// 배열의 비구조화 할당으로 위의 swap 코드를 한 줄로 줄일 수 있음
[a1, b1] = [b1, a1];

// 객체의 비구조화 할당: index로 순서가 아닌, key값을 기준으로 할당
let object = { one: "one", twos: "two", threes: "three", name: "Beanxx" };
let { name: myName, one: oneOne, twos, threes, acb = "four" } = object;
// 다른 변수를 사용하고 싶을 땐 -> name: myName 으로 바꿀 수 있음
console.log(oneOne, two, three, myName, abc);

// --------------------------------

// ** Spread 연산자 **
const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocochipCookie = {
  ...cookie,
  topping: "chocochip",
}; // {base: "cookie", madeIn: "korea", opping: "chocochip"}

const noTopingCookies = ["촉촉쿠키", "안촉촉쿠키"];
const toppingCookies = ["초코칩쿠키", "딸기쿠키", "블루베리쿠키"];
const allCookies = [...noTopingCookies, "함정쿸키", ...toppingCookies];
console.log(allCookies); // ['촉촉쿠키', '안촉촉쿠키', '함정쿸키', '초코칩쿠키', '딸기쿠키', '블루베리쿠키']

// --------------------------------

// ** 동기 & 비동기 **
// 동기 방식 처리(블로킹 방식): JS는 코드가 작성된 순서대로 작업을 처리함
// 즉, 이전 작업이 진행 중일 때는 다음 작업을 수행하지 않고 기다림
// => 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드 실행!
// 동기적 처리 단점: 하나 작업이 너무 오래 걸리면, 모든 작업이 오래 걸리는 하나의 작업이 종료되기 전까지 올 스탑되기 때문에, 전반적 흐름이 느려짐

// 동기적 처리 example
function taskA() {
  console.log("A작업 끝");
}
taskA();
console.log("코드 끝");
// A작업 끝
// 코드 끝

// JS는 싱글 쓰레드로 동작하므로, 멀티 쓰레드 방식을 사용하지 못함

// 비동기 작업(논 블로킹 작업): 여러 개의 작업을 동시에 실행시킴
// 즉, 먼저 작성된 코드 결과를 기다리지 않고 다음 코드를 바로 실행

// 비동기적 처리 example1
function taskB() {
  setTimeout(() => {
    console.log("B TASK END");
  }, 2000); // (콜백함수, delayTime(1000ms = 1s))
}

taskB();
console.log("코드 끝");
// 코드 끝
// B TASK END

// 비동기적 처리 example2
function taskC(a, b, cb) {
  // 콜백함수 cb로 setTimeout(() => {}) 함수를 넘겨줌
  setTimeout(() => {
    const res = a + b;
    cb(res); // 콜백함수 실행
  }, 3000); // 3초 후 함수 실행
}

// + 위의 taskC 함수를 Promise로 처리해보기
// 콜백함수는 필요 없어짐
function taskC(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskD(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000); // 1초 후 함수 실행
}

function taskE(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000); // 2초 후 함수 실행
}

taskC(3, 4, (res) => {
  console.log("C TASK RESULT : ", res);
});

taskD(7, (res) => {
  console.log("D TASK RESULT : ", res);
});

taskD(14, (res) => {
  console.log("E TASK RESULT : ", res);
});

console.log("코드 끝");
// 코드 끝
// D TASK RESULT : 14
// E TASK RESULT : -14
// C TASK RESULT : 7

// 콜백함수로 처리
taskC(4, 5, (c_res) => {
  console.log("C TASK RESULT : ", c_res);
  taskD(c_res, (d_res) => {
    console.log("D TASK RESULT : ", d_res);
    taskE(d_res, (e_res) => {
      console.log("E TASK RESULT : ", e_res);
    });
  });
});
console.log("코드 끝");
// 코드 끝
// C TASK RESULT : 9
// D TASK RESULT : 18
// E TASK RESULT : -18

// 위의 함수 호출을 Promise로 처리해보기
// 위의 콜백함수로 호출했을 때보다 코드 깔꼼
// [.then chaining]
taskC(5, 1)
  .then((c_res) => {
    console.log("C TASK RESULT : ", c_res);
    return taskD(c_res);
  })
  .then((d_res) => {
    console.log("D TASK RESULT : ", d_res);
    return taskE(d_res);
  })
  .then((e_res) => {
    console.log("E TASK RESULT : ", e_res);
  });

// Heap: 변수나 상수들의 사용되는 메모리를 저장하는 영역
// Call Stack: 코드의 실행에 따라서 호출 스택을 쌓는 영역

// --------------------------------

// ** Promise **
// : JS 비동기를 돕는 역할

// 비동기 작업 3가지 상태
// 1. Pending(대기 상태)
// 2. Fulfilled(성공) <- resolve(해결)
// 3. Rejected(실패)  <- reject(거부)

// 콜백함수로 비동기 처리
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("Not number!!");
    }
  }, 2000); // 2초 후 실행
}

// 콜백함수 호출
isPositive(
  10,
  (res) => {
    console.log("Success :", res);
  },
  (err) => {
    console.log("Fail :", err);
  }
);
// Success : 양수
// Fail : Not number!!

// Promise로 비동기 처리
// isPositiveP는 promise 형태임
function isPositiveP(number) {
  // executor => 실행자 (비동기 작업을 실질적으로 수행해줌)
  const executor = (resolve, reject) => {
    setTimeout(() => {
      // 비동기 작업 생성해주기
      if (typeof number === "number") {
        // 비동기 작업 성공 -> resolve
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 비동기 작업 실패 -> reject
        reject("Not number!!");
      }
    }, 2000); // 2초 후 실행
  };

  const asyncTask = new Promise(executor); // 자동으로 executor 실행
  return asyncTask;
}

const res = isPositiveP(101);

// promise 객체의 비동기 처리의 결과를 사용하는 법
// promise는 .then으로 코드 작성 가능
res
  .then((res) => {
    console.log("Success : ", res);
  })
  .catch((err) => {
    console.log("작업 실패 : ", err);
  });

// --------------------------------

// ** async & await **
function hello() {
  return "hello";
}

// helloAsync()는 promise 형태!
// 즉, async는 함수를 promise를 반환하도록 함
async function helloAsync() {
  // async를 붙여준 함수의 return 값은 비동기 객체 작업 Promise의 resolve의 결과값
  return "hello Async";
}

console.log(hello()); // hello
console.log(helloAsync()); // Promise{...}

helloAsync().then((res) => {
  console.log(res); // hello Async
});

// => (await 사용해서 위의 내용 개선해보기)

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  // return delay(3000).then(() => {
  //   return "hello Async";
  // });
  // await 키워드가 붙은 함수의 호출은 뒤의 함수가 끝나기 전까지 그 아래 코드를 실행하지 않음
  // await 줄은 동기적으로 실행하며, async가 붙은 함수에서만 await 사용 가능
  await delay(3000); // 위의 코드를 await로 간단히 작성 가능
  return "hello async";
}

function main() {
  helloAsync().then((res) => {
    console.log(res);
  });
}

// =>
async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();

// --------------------------------

// ** API & fetch **
// API(Application Programming Interface)

// json placeholder site: json 더미 파일 무료 제공 사이트

async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json(); // json형태로 받아옴
  console.log(jsonResponse);
}

getData();
