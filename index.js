function yenToUsd(yen) {
	return +(yen/107.5).toFixed(2);
}

const yenToUsd = yen => Number((yen / 107.5).toFixed(2));

function yenToUsd(yen) {
	let convert = yen / 107.5;
	return parseFloat(convert.toFixed(2));
}

function yenToUsd(yen) {
		let usDollar = yen / 107.5
		return Number(usDollar.toFixed(2))
}

function yenToUsd(yen) {
	let us = (yen / 107.5).toFixed(2);
	return parseFloat(us);
}

function triangle(n) {
	return n*(n+1)/2;
}

let futurePeople = (p,n) => p + (n * 12) * 30;

const futurePeople = (p, n) => p + 360 * n;

function futurePeople(p, n) {
return  Math.ceil((30*12)*n)+p;	
}

function kmtomiles(kilometers) {
	return +(kilometers*0.621371).toFixed(5)
}

const kmtomiles = (k) => Number((k * 0.621371).toFixed(5))

function calculator(num1, operator, num2) {
 if(num2 === 0) return `Can't divide by 0!`
  else  return eval(num1 + operator + num2)
}

function calculator(num1,operator,num2) {
	return {
		'+': num1 + num2,
		'-': num1 - num2,
		'*': num1 * num2,
		'/': num2 ? num1 / num2 : 'Cannot divide by 0!'
	}[operator]
}

const calculator = (m,o,n) => o+n === "/0" ? 'Cannot divide by 0!' : eval(m+o+n);

function calculator(num1, operator, num2) {
	if(operator == '+') return num1+num2;
	if(operator == '-') return num1-num2;
	if(operator == '*') return num1*num2;
	if(operator == '/' && num2 != 0) return num1/num2;
	else return "Can't divide by 0!";
}

function calculator(num1, operator, num2) {
	return operator === '/' && num2 === 0 ? "Can't divide by 0!" : 
				eval(num1+operator+num2);
}

function calculator(num1, operator, num2) {
	switch (operator) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			if (num2 === 0) return "Can't divide by 0!";
			return num1 / num2;
	}
	return null;
}

function calculator(num1, operator, num2) {
	ans = '' + num1 + operator + num2
	if(operator == '/' && num2 == '0'){
		return "Can't divide by 0!"
	}
	return eval(ans)
}

function numbersSum(arr) {
	var s=0;
	for(var i=0;i<=arr.length;i++){
		if (typeof arr[i] === "number")
			s=s+arr[i];
	}
return s;	
}

const numbersSum = arr => arr.reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0);

const numbersSum = a => 
  a.filter(b => typeof(b) == 'number').reduce((a,b) => a+b,0);

	function numbersSum(arr) {
  var sum = 0;
  var newArr = [];
	for(var i=0;i<=arr.length;i++){
    if(Number.isInteger(arr[i])){
      newArr.push(arr[i]);
      sum = sum + arr[i];
    }
  }
  return sum;
}

function kmtomiles(kilometers) {
	return parseFloat((kilometers *  0.621371).toFixed(5))
}


function isBetween(first, last, word) {
	return word > first && word < last;	
}

function isBetween(first, last, word) {
	return [...arguments].sort()[1] === word;
}

let isBetween=(first, last, word)=>[first,last,word].sort()[1]==word

function isBetween(first, last, word) {
	return [first,last,word].sort().indexOf(word) == 1;
}

function getTriangleType(arr) {
	return arr.length === 3 ? ['equilateral', 'isosceles', 'scalene'][new Set(arr).size - 1] : 'not a triangle';
}

function getTriangleType(arr) {	
			if(arr.length != 3){
				return "not a triangle";
			}
		return new Set(arr).size === 3? "scalene": new Set(arr).size === 2 ? "isosceles":"equilateral";
}

function frontThree(str) {
	return slc = str.slice(0,3).repeat(3)
}

const frontThree = txt => txt.slice(0,3).repeat(3);

const frontThree = txt => txt.substring(0, 3).repeat(3);

function frontThree(txt){
	return(txt.substring(0,3)+txt.substring(0,3)+txt.substring(0,3));
}