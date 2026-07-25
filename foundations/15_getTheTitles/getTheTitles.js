const getTheTitles = function(books) {
    let listBooks = []
    for (const i in books){
        listBooks.push(books[i].title)
    }
    return listBooks;

    /*
    for (const book of books) {
        listBooks.push(book.title);
    }
    */

    //return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
