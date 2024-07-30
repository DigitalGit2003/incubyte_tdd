// StringCalculator.js
class StringCalculator {
    add(numbers) {
      if (numbers === "") return 0;
  
      let delimiter = ",";
      let numsString = numbers;
  
      // Checking for custom deliniter
      if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterEndIndex);
        numsString = numbers.substring(delimiterEndIndex + 1);
      }
  
      // Split numbers by the delimiter and new lines
      const numArray = numsString.split(new RegExp(`[${delimiter}\n]`));
      const nums = numArray.map(num => parseInt(num, 10));
  
      // Check for negative numbers
      const negatives = nums.filter(num => num < 0);
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
      }
  
      // Calculate the sum
      return nums.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
    }
  }
  
  module.exports = StringCalculator;
  