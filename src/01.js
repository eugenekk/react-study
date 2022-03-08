// 자바스크립트 순수함수 필수 조건

// // 같은 input에 대해서는 항상 동일한 값을 리턴한다
// function add(a, b){
//   return a+b
// }

// console.log(add(1,2))

// // 동일한 input에 대해서 동일한 결과값을 돌려줘야한다.
// function getTime(x) {
//   return Date.now() + x;
// }

// console.log(getTime(3000));


// // 사이드 이펙트가 없어야 한다.
// let y = 1;
// function sideEffect(x) {
//   y += x
//   return x + 1;
// }

// console.log(sideEffect(1), y); // y값이 바뀌고 있다 ---X
// console.log(sideEffect(1), y);

//spread 연산자
// let argArray = [1,2,3]
// function example(...args) {
//   console.log(args)
// }
// example(1,2)
// example(...argArray)

// mutable 객체
let fruits = ['banana', 'apple', 'melon']
let clonefruits = fruits;

clonefruits.push('plum');

console.log('clonefruits', clonefruits)
console.log('fruits', fruits)

let myInfo = {
  age : 18,
  email : 'sal10@gmail.com'
}
let cloneMyInfo = myInfo

cloneMyInfo.age = cloneMyInfo.age + 1

console.log('cloneMyInfo', cloneMyInfo);
console.log('myInfo', myInfo)


//immutable 객체
let myName = 'James'
let cloneName = myName;

cloneName = cloneName + 'hello';

console.log('cloneName', cloneName)
console.log('myName', myName)


let count = 1
let cloneCount = count;

cloneCount = cloneCount + 2;

console.log('cloneCount', cloneCount)
console.log('count', count)