function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
};

function findBookById(books, id) {
  return books.find(book => book.id === id);
};

function partitionBooksByBorrowedStatus(books) {
  
  let borrowed = [];
  let returned = [];
  books.forEach(book => {
    if (book.borrows[0].returned === false) {
      borrowed.push(book)
    } else {
      returned.push(book);
    }
  });
  let allBooks = [];
  allBooks.push(borrowed, returned);
  return allBooks;
  
  //filter books?
  //borrow goes to one array -- if true?
  //if not borrowed goes to another array --- if false?
  //every false pus here [] / every true push there?
  //filter makes its own array --- so i keep true in that array and push false in another arr?
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  book.borrows.filter((book) => {
    accounts.filter((account) => {
      if (account.id === book.id) {
        result.push({...book, ...account});
      }
    })
  })
  return result.slice(0,10);
  
  //return an of array people who have borrowed THAT book
  //rest operator? have id push rest into array
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
