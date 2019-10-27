// 1.
const date = Date();
// 2.
const string = toString(7);
//3.
const number = parseInt(string);
//4.
const yes = true;
const foo = null;
const bar = undefined;
const numero = 7;
const not = NaN;
const str = "Hello.";
//5.
const add = (num1, num2) => {
    return num1 + num2;
  }
//6. 7. 8.
const myFunc = (condition1, condition2) => {
    if (condition1 && condition2) {
      console.log("Both conditions are true.")
    } else if (condition1 || condition2){
      console.log("One condition is true")
    } else {
      console.log("Neither condition is true.")
    }
    }
    
    myFunc(false, false);

