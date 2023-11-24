function fibonacci(num) {
  if (num <= 0) {
    return "Please enter a positive integer greater than 0.";
  } else if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    let fibArray = [0, 1];

    for (let i = 2; i < num; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray[num - 1];
  }
}

// Get user input for the value of num
var userInput = prompt();

// Convert the user input to an integer
var userNum = parseInt(userInput);

// Check if the input is a valid positive integer
if (isNaN(userNum) || userNum <= 0) {
  alert("Please enter a valid positive integer greater than 0.");
} else {
  // Call the function and display the result
  alert( fibonacci(userNum));
}
