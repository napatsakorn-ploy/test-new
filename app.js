// data
const books = [
  { id: 1, title: "ภาษาไทย", price: 250 },
  { id: 2, title: "คณิต", price: 250 },
  { id: 3, title: "ศิลปะ", price: 500 }
];

// logic
const sum = books.reduce((acc, book) => {
  return acc + book.price;
}, 0);

// display
console.log("ORIGINAL: ", books);
console.log("UPDATED: ", sum);
