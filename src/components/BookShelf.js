import React from "react";
import Book from "./Book";

const BookShelf  = ({ books, shelf, cahngeBookShelf, bookDetails }) => {
 
    const shelfBooks = books.filter(book => book.shelf === shelf.key);
    return(

        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                   {shelfBooks.map(book => (
                       <Book 
                        key={book.id}
                        book={book}
                        shelf={book.shelf}
                        cahngeBookShelf={cahngeBookShelf}
                        bookDetails={bookDetails}
                       />
                    ))} 
                </ol>
            </div>
        </div>
                
    );
} 

export default BookShelf;          