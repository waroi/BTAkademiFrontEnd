let number1, number2, kalanlar;
let arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];

//DESTRUCTİNG

// [number1, number2] = arr;
[number1, number2, ...kalanlar] = arr;

console.log(number1, number2, kalanlar);
