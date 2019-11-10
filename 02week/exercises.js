// 1.
const cars = ['Ford', 'Chevy', 'Kia', 'Dodge'];
console.log(cars.length);
// 2.
const moreCars = ['GMC', 'Hyundai', 'Porsche', 'Honda'];
var totalCars = cars.concat(moreCars);
console.log(totalCars);
// 3.
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));
// 4.
stringOfCars = totalCars.join();
// 5.
totalCars = stringOfCars.split(",");
// 6.
const carsInReverse = totalCars.reverse();
console.log(carsInReverse);
// 7.
carsInReverse.sort();
// Chevy should be at index 0.
console.log(carsInReverse.indexOf('Chevy'));
//const removedCars = carsInReverse.slice(1, -1);
// 8.
console.log(carsInReverse);
var removedCars = [];
removedCars.push(carsInReverse.slice(2, 3));
removedCars.push(carsInReverse.slice(4, 5))
console.log(removedCars);
// 9.
carsInReverse.splice(1, 2, 'Ford', 'Honda');
console.log(carsInReverse);
// 10.
carsInReverse.push('Dodge');
console.log(carsInReverse);
// 11.
carsInReverse.pop();
console.log(carsInReverse);
// 12.
carsInReverse.shift();
// 13.
carsInReverse.unshift("Audi");
// 14.
const myFunc = (element) => {
  console.log(element + 2);
}
const numbers = [23, 45, 0, 2];
numbers.forEach(myFunc);