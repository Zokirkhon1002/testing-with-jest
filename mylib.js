// raqamlarni test qilish
const absolute = (n) => (n >= 0 ? n : -n);

// matnlarni test qilish
const salam = (name) => `Assalomu alaykum, ${name}`;

// arraylarni yoki qatorlarni test qilish
const getCurrencies = () => ["UZS", "MYR", "TRY", "USD", "KRW"];

// Obyektlarni test qilish
const getProduction = (productId) => {
  return { id: productId, title: "banana", price: 3 };
};

// Xatolarni test qilish
const registerUser = (userName) => {
  if (!userName) throw new Error("Username is required");
  return { id: 1002, username: userName };
};

module.exports = {
  absolute,
  salam,
  getCurrencies,
  getProduction,
  registerUser,
};
