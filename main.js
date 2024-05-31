// Question: 70
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i); // Each log will print the correct value of `i` because of block scope
    }, 1000);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
// Question: 71
var name1 = "Urooj";
console.log(name1); // Outputs: Alice
// If a new name is needed, declare a new variable
var newName = "Mehak";
console.log(newName); // Outputs: Bob
// Question: 72
function calculateSum() {
    var sum = 0;
    // Loop to calculate the sum of numbers from 1 to 5
    for (var i = 1; i <= 5; i++) {
        sum += i;
    }
    // Declare average outside the block
    var average;
    // Block scope
    {
        average = sum / 5;
        console.log("Inside block: average = ".concat(average));
    }
    // Now 'average' can be accessed outside the block
    console.log("Outside block: average = ".concat(average));
    // 'sum' is accessible here
    console.log("Outside block: sum = ".concat(sum));
}
calculateSum();
