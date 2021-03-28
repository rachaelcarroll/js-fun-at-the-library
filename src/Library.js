function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: [],
  }
  };
  return library;
}

function addBook(library, book) {
  library['shelves'][book.genre].push(book)
};

function checkoutBook(library, book, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    var title = library.shelves[genre][i].title;
    if (title === book) {
      library.shelves[genre].splice(genre[i], 1);
      return `You have now checked out ${book} from the ${library.name}`
    }
    }
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
   };

























module.exports = {
createLibrary,
addBook,
checkoutBook
};
