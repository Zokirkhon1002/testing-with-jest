const { fizzBazzPractice } = require("../fizzBazz");

// FUNCTION => FIZZ BAZZ PRACTICE
describe("FizzBazzPractice", () => {
  it("should return error if input type is not number", () => {
    let allDataWithOutNumber = [
      String,
      "",
      Array,
      [],
      Object,
      {},
      Error,
      undefined,
      null,
      Function,
      function () {},
      Number,
      Boolean,
      false,
      true,
    ];
    allDataWithOutNumber.forEach((err) => {
      expect(() => {
        fizzBazzPractice(err);
      }).toThrow();
    });
  });
  it("should return FizzBuzz if input is divisible by 3 and 5", () => {
    for (let i = 0; i < 100000; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        expect(fizzBazzPractice(i)).toBe("FizzBuzz");
      }
    }
  });
  it("should return a Fizz number if input is only divisible by 3", () => {
    for (let i = 0; i < 100000; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        expect(fizzBazzPractice(i)).toBe("Fizz");
      }
    }
  });
  it("'should return Fizz if input is only divisible by 5", () => {
    for (let i = 0; i < 100000; i++) {
      if (i % 5 === 0 && i % 3 !== 0) {
        expect(fizzBazzPractice(i)).toBe("Buzz");
      }
    }
  });
  it("should return a number if input is not divisible by 3 or 5", () => {
    for (let i = 0; i < 100000; i++) {
      if (i % 3 !== 0) {
        if (i % 5 !== 0) {
          expect(fizzBazzPractice(i)).toBe(i);
        }
      }
    }
  });
});
