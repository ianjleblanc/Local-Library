function findAccountById(accounts, id) {
return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((nameA, nameB) => (nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  books.forEach((book) => {
    book.borrows.forEach(borrow => {
      if (borrow.id === account.id)
    totalBorrows++;
    });    
  })
    return totalBorrows;
  }
  // add up total borrows for account that is given
  //loop through books
  //loop through books match id each time borrowed and add together
  //return TOTAL of books borrowed for that account?
  //


function getBooksPossessedByAccount(account, books, authors) {
  let totalPossessed = [];
  // return all books that are checked out currently?
  books.forEach((book) => {
    if (book.borrows[0].id === account.id) {
      console.log(book.authorId)
     const author = authors.find((author) => author.id === book.authorId)
     console.log(author);
     
      book.author = author
      totalPossessed.push(book);
    }
  }) 
  console.log(totalPossessed)
  return totalPossessed; 
  
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
