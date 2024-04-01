

function generateArray(start, end) {
    // Initialize an empty array to store the result
    const result = [];
  
    // Determine the direction of the range (increasing or decreasing)
    const step = start <= end ? 1 : -1;
  
    // Iterate from start to end and push each number to the result array
    for (let i = start; i !== end + step; i += step) {
      result.push(i);
    }
  
    // Return the generated array
    return result;
  }

  
  console.log(generateArray(2,10));
