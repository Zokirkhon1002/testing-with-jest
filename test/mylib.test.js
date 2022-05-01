const {
  absolute,
  salam,
  getCurrencies,
  getProduction,
  registerUser,
} = require("../mylib");

// FUNCTION => ABSOLUTE
describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    expect(absolute(1)).toBe(1);
  });
  it("should return a positive number if input is negative", () => {
    expect(absolute(-1)).toBe(1);
  });
  it("should return a 0 if input is 0", () => {
    expect(absolute(0)).toBe(0);
  });
});

// FUNCTION => SALAM
describe("Salam", () => {
  it("should return greeting", () => {
    //   expect(salam("Zokirkhon")).toBe("Assalomu alaykum, Zokirkhon");
    //   expect(salam("Zokirkhon")).toContain("Zokirkhon");
    expect(salam("Zokirkhon")).toMatch(/Zokirkhon/);
  });
});

// FUNCTION => GET CURRENCIES
describe("Get Currencies", () => {
  it("should return default currencies", () => {
    // O'ta umumiy
    // tavsiya qilinmaydi
    // yozishdan qaytariladi
    expect(getCurrencies()).toBeDefined();
    expect(getCurrencies()).not.toBeNull();

    // O'ta aniq test
    expect(getCurrencies()[0]).toBe("UZS");
    expect(getCurrencies()[1]).toBe("MYR");
    expect(getCurrencies()[2]).toBe("TRY");
    expect(getCurrencies().length).toBe(5);

    // To'g'ri uslubda yozilgan test
    expect(getCurrencies()).toContain("UZS");
    expect(getCurrencies()).toContain("MYR");
    expect(getCurrencies()).toContain("TRY");
    expect(getCurrencies()).toContain("KRW");

    // To'g'ri uslubda yozilgan testning yanada samaraliroq yo'li
    expect(getCurrencies()).toEqual(
      expect.arrayContaining(["UZS", "KRW", "MYR", "TRY"])
    );
  });
});

// FUNCTION => GET PRODUCT
describe("Get Product", () => {
  it("should return default product with the given productId", () => {
    // // obyektlar bilan not'g'ri test qilish
    // expect(getProduction(1)).toBe({ id: 1, title: "banana", price: 3 });

    // obyektlar bilan O'ta aniq test qilish
    expect(getProduction(1)).toEqual({ id: 1, title: "banana", price: 3 });

    // obyektlar bilan to'g'ri va samarali test qilish
    expect(getProduction(1)).toMatchObject({
      id: 1,
      title: "banana",
      price: 3,
    });
    expect(getProduction(1)).toMatchObject({ id: 1, price: 3 });
    expect(getProduction(1)).toHaveProperty("price", 3);
  });
});

// FUNCTION => REGISTER USER
describe("registUser", () => {
  it("should return user object if userName is valid username is passed", () => {
    expect(registerUser("Admin")).toMatchObject({ username: "Admin" });
    expect(registerUser("Admin").id).toBeGreaterThan(0);
  });
  it("should return error if userName is falsy", () => {
    //   falsy: [null,undefined,NaN,"",0,false];
    let falsyItems = [null, undefined, NaN, "", 0, false];
    falsyItems.forEach((err) => {
      expect(() => {
        registerUser(err);
      }).toThrow();
    });
  });
});
