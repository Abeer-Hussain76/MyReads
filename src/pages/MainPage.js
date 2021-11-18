import React, { Component } from "react";
import BookShelf from '../components/BookShelf';
import { Link } from 'react-router-dom';


class MainPage extends Component {

    render() {
        const { books, BookShelves, cahngeBookShelf, bookDetails } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {BookShelves.map(shelf => (
                        <BookShelf 
                            key={shelf.key}
                            shelf={shelf}
                            books={books}
                            cahngeBookShelf={cahngeBookShelf}
                            bookDetails={bookDetails}
                        />
                    ))}
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a Book</button>
                    </Link>
                </div>
            </div>
        );
    }
}


export default MainPage;