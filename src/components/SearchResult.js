import React from 'react';
import Book from './Book';

const SearchResult = ({ books, searchBooks, cahngeBookShelf, bookDetails }) => {
    //console.log('books:',books);
    //console.log('searchbooks:',searchBooks);
    const syncSearchBooks = searchBooks.map(book => {
            books.map(b => {
                if (b.id === book.id) {
                    book.shelf = b.shelf;
                }
            return b;
            });
        return book;
    });



    return(
        <div className="search-books-results">
              <ol className="books-grid">
                    {syncSearchBooks.map(book => (
                       <Book 
                            key={book.id}
                            shelf={book.shelf ? book.shelf : 'none'}
                            book={book}
                            cahngeBookShelf={cahngeBookShelf}
                            bookDetails={bookDetails}
                        /> 
                    ))}  
              </ol>
            </div>
    );
}

export default SearchResult;