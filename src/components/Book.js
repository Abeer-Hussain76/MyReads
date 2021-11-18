import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
    
    state = {
        shelf: this.props.shelf
    };

    changeHandler = e => {
        const {value} = e.target;
        this.setState({shelf: value});
        this.props.cahngeBookShelf(this.props.book, value);
    };

    handelDetails = () => {
        this.props.bookDetails(this.props.book.id);
    };
    
    render(){
        const { book } = this.props;
        const { shelf } = this.state;

        return(

            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ 
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail : "../icons/icon-thumbnail.svg"})` 
                            }}>

                        </div>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={this.changeHandler}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors? book.authors.join(", "): "Unkown author"}</div>
                    <div>
                        <Link 
                        to="/book/details"
                        className='details-link'
                        onClick={this.handelDetails}>Book details</Link>
                    </div>        
                </div>
            </li>
            
        );
    }
}


export default Book;