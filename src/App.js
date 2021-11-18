import React,{ Component } from "react";
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainPage from './pages/MainPage';
import Search from './pages/Search';
import BookDetails from "./components/BookDetails";


const BookShelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want To Read' },
    { key: 'read', name: 'Read' }
];

class BooksApp extends Component {

    state = {
        books: [],
        bookDetails: {}
    }

    componentDidMount() {
        // get all books from server-side
        BooksAPI.getAll()
        .then(books => {
            //update the books[] with the returned books
            this.setState(
                {books}
            );
        }).catch(e => console.log(e));
    }

    // change the book shelf 
    cahngeBookShelf = ( book, shelf ) => {
        
        // update the server-side
        BooksAPI.update(book, shelf)
        .then(() => console.log("Done"))
        .catch(err => console.log(err));

        if(shelf === 'none') {
            this.setState(prevState => ({
            books: prevState.books.filter(b => b.id !== book.id)
            }));
        } else {
            book.shelf = shelf;
            this.setState(prevState => ({
                books: prevState.books.filter(b => b.id !== book.id).concat([book])
            }));
        } 
    };

    // show book details
    bookDetails = bookId => {
        BooksAPI.get(bookId)
        .then(book => {
            this.setState({bookDetails: book});
        })
        .catch(err => console.log(err));
    };
    
    render(){
        const { books, bookDetails } = this.state;
        //console.log(books);
        return(
            <div className="App">
                
                    <Route exact path='/' > 
                        <MainPage 
                          books={books}
                          BookShelves={BookShelves}
                          cahngeBookShelf={this.cahngeBookShelf} 
                          bookDetails={this.bookDetails}
                        />
                    </Route>
                    <Route path='/book/details' > 
                       <BookDetails  book={bookDetails}/>
                    </Route>
                    <Route path='/search'> 
                        <Search
                            books={books}
                            cahngeBookShelf={this.cahngeBookShelf}
                            bookDetails={this.bookDetails}
                        />
                    </Route>
                
            </div>
        );
    }
}

export default BooksApp;
