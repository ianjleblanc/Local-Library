function getTotalBooksCount(books) {
  return books.length;
};

function getTotalAccountsCount(accounts) {
  return accounts.length;
};

function getBooksBorrowedCount(books) {
  let total = 0;
  books.forEach(book => {
    if (book.borrows[0].returned === false) {
      return total++;
    }
  });  
  return total;

}

function getMostCommonGenres(books) {

  const getGenres = books.reduce((acc, book) => {
    let { genre } = book;

    
    if (acc[genre] === undefined) {
      // set default object format
      acc[genre] = { name: `${genre}`, count: 1 };
    } else {
      acc[genre].count++;
    }

    return acc;
  }, {});

  // get object values so count is accessible
  const allGenres = Object.values(getGenres);

  // Sort genres
  allGenres.sort((a, b) => (a.count > b.count ? -1 : 1));

  // Return index from 0 to 5 of genres
  return allGenres.slice(0, 5);
}



function getMostPopularBooks(books) {
  // sorts books based on borrow history length
  const sortedBooks = books.sort((bookA, bookB) => bookA.borrows.length < bookB.borrows.length ? 1 : -1);
  // reformats sorted array to match desired format
  let popularBooks = sortedBooks.map(book => {
    return {name: book.title, count: book.borrows.length}
  });
  return popularBooks.slice(0,5);
  
}
// {
//   //reduce - goood function to create object knowing how many times each book borrowed
//   const groupById = books.reduce((acc, book) => {
//     acc[book.id] = book.borrows.length;
//     return acc;
//   }, {});
  
//   // sort this object by number of times each book has been borrowed
//   const keys = Object.keys(groupById);
//   let sorted = keys.sort((keyA, keyB) => {
//     if(groupById[keyA] > groupById[keyB]) {
//       return -1
//     } else if(groupById[keyB] > groupById[keyA]){
//         return 1;
//       } 
//         return 0;
    
//   })
//   let newArr = sorted.map((id) => {
//     let book = books.find(book => book.id === id);
//     let count = groupById[id];
//     return {name:book.title, count: count}
//   })
//   return newArr.slice(0,5);
// }

function getMostPopularAuthors(books, authors) {
  
  let newArr = [];

  for (let author of authors) {
    let totalBorrows = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        totalBorrows += book.borrows.length;
      }  
    } 
    newArr.push({name: `${author.name.first} ${author.name.last}`, count: totalBorrows})    
  };
   let sorted = newArr.sort((author1, author2) =>
     author1.count < author2.count ? 1 : -1);
  return sorted.slice(0,5);
  // *** each instance of authorId - count number of borrows - store total number of borrows for each authorId - Then reference the author information - limit to top five authors
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
