// 1번

function solutuon(a, b) {
	console.log(a + b);
	return a + b;
}

// 2번

let data = ['raram', 'ceo', 'namgung', 'jhm'];
let result = data.filter((v) => v === 'ceo');
console.log(result);

//3번

let character = 'ceo is very good';
console.log(character.split(' ').reverse().join(' '));

//4번

let solution = (num1, num2) => {
	console.log(num1 + num2);
};

//5번

let arr = ['raram', 'ceo', 'namgung', 'jhm'];
arr[2] = '';

//6번

let arr2 = ['raram', 'ceo', 'namgung', 'jhm'];
arr2[2] = null;

//7번

let arr3 = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
for (let i = arr2.length; i <= 50; i++) {
	arr3.push(arr3[i - 1] + arr3[i - 3]);
}

console.log(arr3[22] % 50);

// 8번

function solution(a, b) {
	return a % b == 0;
}
