/* 
In this mini project, you will get to review JavaScript 
fundamentals like functions, variables, conditionals and 
more by building a gradebook app.

This will give you an opportunity to solve small problems 
and get a better understanding of the basics.œœs
*/

function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  let average = sum / scores.length;
  return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//-----

function calculateAverageUsingForLoop(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const average = sum / numbers.length;
  return average;
}

// Example usage
const numbers = [10, 20, 30, 40, 50];
const average1 = calculateAverageUsingForLoop(numbers);
console.log("Average using for loop:", average1); // Output: 30

//---

function calculateAverageUsingReduce(numbers) {
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  const average = sum / numbers.length;
  return average;
}

// Example usage
const average2 = calculateAverageUsingReduce(numbers);
console.log("Average using reduce:", average2); // Output: 30

//--

const average = numbers.reduce((sum, value) => sum + value, 0) / numbers.length;

console.log("Average:", average); // Output: 30

//===============================================

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const classAverage = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  //${hasPassingGrade(score)?"You passed the course.":"You failed the course"}
  const message = `Class average: ${classAverage}. Your grade: ${studentGrade}. ${
    hasPassingGrade(studentScore)
      ? "You passed the course."
      : "You failed the course."
  } `;
  return message;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
