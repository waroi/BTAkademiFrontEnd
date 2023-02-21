function minMaxAvg(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  const avg = sum / arr.length;
  return [min, max, avg];
}
const myArray = [3, 5, 1, 10, 4];
const result = minMaxAvg(myArray);
console.log(
  `Minimum: ${result[0]}, Maximum: ${result[1]}, Average: ${result[2]}`
);
// Küçükten büyüğe sıralama ve ortalamyı buluyoruz.
