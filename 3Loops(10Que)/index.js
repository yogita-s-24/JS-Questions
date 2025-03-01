//1. Print 1 to 50 numbers

for (let i = 1; i < 51; i++) {
  // console.log(i)
}

//2. Use while to sum of the 1 to 10.
let x = 1;
let sum = 0;
while (x <= 10) {
  sum = sum + x;
  x++;
}
console.log(sum);

//3.
let str = "Javascript";
for (let char of str) {
  console.log(char);
}

//4.
for (let i = 1; i < 21; i++) {
  if (i % 2 !== 0) {
  } else {
    console.log(i);
  }
}

//5.
var num1 = 5;

do {
  console.log(num1);
  num1--;
} while (num1 > 0);

//6.factorial

let fact = 1;
for (let i = 5; i > 0; i--) {
  fact = fact * i;
}
console.log(fact);

//7.
var hold = 1;
for (let i = 1; i < 4; i++) {
  var string = "";

  for (let j = 1; j < 4; j++) {
    string += `${hold}`;
    hold++;
  }
  console.log(string);
}

//8. Reverse an array
var arr = [1,2,3,4,5];
for(let i=0; i<Math.floor(arr.length/2); i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1 - i];
    arr[arr.length-1-i] = temp;
}
console.log(arr);

//9. 
var obj = {
    name : "a",
    email: "yogi@gmail.com",
    age : 24
}
for(let key in obj){
    console.log(key)
}
