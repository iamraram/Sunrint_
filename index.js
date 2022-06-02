// 1번 문제 - 첫번째 풀이
// 함수에서는 반환만 하고, 함수를 출력하는 경우

function solution(a, b) {
	return a + b;
}

console.log(solution(1, 2));

// 1번 문제 - 두번째 풀이
// 함수 자체에서 출력을 하는 경우

function solution2(a, b) {
	console.log(a + b);
}

solution2(1, 2);

// 2번 문제 - 첫번째 풀이
// 이렇게 하는 방법이 있고

let data = ['raram', 'ceo', 'namgung', 'jhm'];

data = data.filter((data) => {
	return data == 'ceo';
});

console.log(data);

// 2번 문제 - 두번째 풀이
// 이렇게 하는 방법이 있어요

let data2 = ['raram', 'ceo', 'namgung', 'jhm'];

data2 = data2.filter((data2) => data2 == 'ceo');
console.log(data2);

// 3번 문제 - 첫번째 풀이
// 반복문으로 뒤집는 방법

let character = 'ceo is very good';
let splited = character.split(' ');
let arr = [];

for (let i = 3; i >= 0; i--) {
	arr.push(splited[i]);
}

console.log(arr);

// 3번 문제 - 두번째 풀이
// reverse 함수를 사용하는 방법

let character2 = 'ceo is very good';
let splited2 = character2.split(' ');
let arr2 = splited2.reverse();

console.log(arr2);

// 4번 문제

let solution3 = (num1, num2) => {
	console.log(num1 + num2);
};

solution3(1, 2);

// 5번 문제

let data3 = ['raram', 'ceo', 'namgung', 'jhm'];
data3[2] = '';
console.log(data3);

// 6번 문제

let data4 = ['raram', 'ceo', 'namgung', 'jhm'];
delete data4[2];
console.log(data4);

// 7번 문제 - 첫번째 풀이
// 1만 가지고 규칙을 찾는 경우

let arr3 = [1, 1, 1];

for (let i = 1; i < 22; i++) {
	arr3.push(arr3[i] + arr3[i - 1]);
}

console.log(arr3[22] % 50);

// 7번 문제 - 두번째 풀이
// 배열에 일단 다 넣고 규칙을 찾는 경우

let arr4 = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

for (let i = 8; i < 22; i++) {
	arr4.push(arr4[i] + arr4[i - 1]);
}

console.log(arr4[22] % 50);

// 8번 문제

function solution4(a, b) {
	if (a % b == 0) {
		return true;
	} else {
		return false;
	}
}

console.log(solution4(4, 2));
