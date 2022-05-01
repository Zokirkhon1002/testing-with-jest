const fizzBazzPractice = (n) => {
  if (typeof n !== "number") {
    throw new Error("input son bo'lishi kerak.");
  }
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";

  if (n % 3 === 0) return "Fizz";

  if (n % 5 === 0) return "Buzz";

  return n;
};

module.exports = { fizzBazzPractice };
