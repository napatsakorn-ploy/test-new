// data
const books = [
  { id: 1, title: "ภาษาไทย", price: 250 },
  { id: 2, title: "คณิต", price: 250 },
  { id: 3, title: "ศิลปะ", price: 500 }
];

//logic
const newBooks = books.map(book => {
  if (book.id === 2) {
    return { ...book, title: ".net" };
  }
  return book;
});

///****************************1 */

const updateTitle = book => {
  if (book.id === 2) {
    return { ...book, title: "N ploy" };
  }
  return book;
};

const newBooks = books.map(updateTitle);

// display
console.log("ORIGINAL: ", books);
console.log("UPDATED: ", newBooks);
