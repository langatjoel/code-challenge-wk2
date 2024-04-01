
function stringChange(str) {
    // Initialize an empty string to store the result
    let result = '';
  
    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
      // Check if the character is uppercase
      if (str[i] === str[i].toUpperCase()) {
        // Convert uppercase character to lowercase and add to result
        result += str[i].toLowerCase();
      } else {
        // Convert lowercase character to uppercase and add to result
        result += str[i].toUpperCase();
      }
    }
  
    // Return the result string with swapped case
    return result;
  }
  
  console.log(stringChange('The Quick Brown Fox'))