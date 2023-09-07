let number = prompt("give a number");

function factor(number) {
    if (number < 0)
        return -1;
    else if (number == 0)
        return 1;
    else {
        return (number * factor(number - 1));
    }
}
console.log(factor(number));


const leapNum = prompt("see if a year is a leap year");

if (leapNum % 4 === 0) {
    console.log("leapNum is a leap year");
} else {
    console.log(leapNum + " is not a leap year");
}

let Number = 1;
let sum = 0;
while (Number <= 100) {
    sum = Number + sum;
    Number++;
}
console.log(sum);


const mathNumber = prompt("give me number");
const mathNumber2 = prompt("give me number!");

console.log("mathNumber" + "mathNumber2");
console.log(mathNumber - mathNumber2);
console.log(mathNumber * mathNumber2);
console.log(mathNumber / mathNumber2);



const string = "string";
const Num = 5;
const boolean = false;
let nullVar = null;
let undefined1 = "";
const object = {object:"object"};
const array = ["array"];
let default1;




