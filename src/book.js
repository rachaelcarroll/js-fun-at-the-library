function createTitle(bookTitle) {
  return `The ${bookTitle}`;
}

function buildMainCharacter(name, age, pronouns) {
  var bookCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
 return bookCharacter;
}

function saveReview(content, reviews) {
  if(!reviews.includes(content)) {
   reviews.push(content);
 }
}

function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20;
  return bookPageCount
}

function writeBook(bookTitle, bookCharacter, genre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
}

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
