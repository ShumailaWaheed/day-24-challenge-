// Question: 70

for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i); // Each log will print the correct value of `i` because of block scope
    }, 1000);
  }

  // Question: 71

  const name1 = "Urooj"; 
  console.log(name1); // Outputs: Alice
  
  // If a new name is needed, declare a new variable
  const newName = "Mehak";
  console.log(newName); // Outputs: Bob
  

// Question: 72

function calculateSum() {
  let sum = 0;

  // Loop to calculate the sum of numbers from 1 to 5
  for (let i = 1; i <= 5; i++) {
      sum += i;
  }

  // Declare average outside the block
  let average;

  // Block scope
  {
      average = sum / 5;
      console.log(`Inside block: average = ${average}`); 
  }

  // Now 'average' can be accessed outside the block
  console.log(`Outside block: average = ${average}`); 

  // 'sum' is accessible here
  console.log(`Outside block: sum = ${sum}`);
}

calculateSum();
