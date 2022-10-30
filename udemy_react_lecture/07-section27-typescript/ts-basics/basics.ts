// type은 소문자로 지정!

// [숫자형]
let age: number;
age = 12;

let ages: number = 12;

// [문자형]
let userName: string;
userName = 'Max';


// [Boolean]
let isInstructor: boolean;
isInstructor = true;

// [Array]
// 문자형 배열
let hobbies: string[];
hobbies = ['Sprots', 'Cooking'];

// [Object]
let person: {
  name: string;
  age: number
};

person = {
  name: 'Max',
  age: 20
}

// 객체를 여러 개 가진 배열
let people: {
  name: string;
  age: number
}[];

// [Type inference(타입 추론)]
// 문자열 타입을 추론하여 다른 타입이 오면 error -> 가급적 :string 처럼 타입 지정 안하고 타입 추론 사용하는게 좋음~
let str = 'Happy Halloween!';
// str = 123; <- error

// [Union Type]: 타입 정의시 1개 이상의 타입 사용 가능 
let str1: string | number = 'Happy Halloween!';
str1 = 123;

// [Type Aliases] -> 코드 간결, 관리 easy
// 반복해서 사용 가능
type Person = {
  name: string;
  age: number;
}

let person1: Person;
let people1: Person[];

// [Functions & types]
// 매개 변수 타입뿐만 아니라 반환 타입도 생각해야 한닷
function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value)
}

// return문이 없어서 type이 void로 타입 추론됨
// void: null, undefined와 비슷하지만 항상 함수와 결합해서 사용!


// [Generics] => 유연성, 타입 안정성 측면에서 굳~
// 기존 배열은 변경하지 않 고 새로운 값 추가 가능 
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
// 함수 매개변수들을 any type으로 지정해줘서 이를 가지고 만들어진 배열 내의 값을 타스로 타입을 검사할 수 없음
// 즉, 이후엔 타스의 기능을 잃어버린 셈,,
// Solution: 제네릭 타입 설정해주기!! ex. <T>
// => 제네릭 타입을 사용하여 타스에게 any type이 아니란 것을 알려줬기 때문에 이후에 배열 내에 숫자 타입인지 등의 타입 검사가 가능해짐!

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);  // [-1, 1, 2, 3] 

// updatedArray[0].split(''); <- error
// why error? updatedArray[0]는 숫자타입이란걸 추론해냈고, split() 메서드는 숫자에 사용 불가하므로


// 아래 두 case는 같은 코드
// let numbers: number[] = [1, 2, 3];
// let numbers: Array<number> = [1, 2, 3];
