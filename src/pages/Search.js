import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import SearchResult from '../components/SearchResult';

class Search extends Component {

    state = {
        query: '',
        searchBooks: []
    }
    //Update query and serach result 
    updateQuery = query => {
    
        this.setState ({
            query
        }, () => this.onSearch(query));  
    };

    onSearch = query => {

       if(query) {
            BooksAPI.search(query)
            .then(books => {
                if(books.error) {
                    this.setState({ searchBooks: [] });
                } else {
                    this.setState({ searchBooks: books });
                }
            });
        } else {
             this.setState({ searchBooks: [] });
        } 
    };
    
    // clear query and state when exit the search page
    clearQuery = () => {
        this.setState({
            query: '',
            searchBooks: []
        });
    };

    render() {

        const { query, searchBooks } = this.state;
        const { books, cahngeBookShelf, bookDetails } = this.props;
       
        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search" onClick={this.clearQuery}>
                    Close
                </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={e => this.updateQuery(e.target.value)}/>

              </div>
            </div>
            <SearchResult 
                books={books}
                searchBooks={searchBooks}
                cahngeBookShelf={cahngeBookShelf}
                bookDetails={bookDetails}
            />
          </div>
        );
    }
}

export default Search;