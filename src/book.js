function createTitle(bookIdea) {
  return `The ${bookIdea}`;
}
createTitle("Storm's Awakening")

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
 return character;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
