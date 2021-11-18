import React from 'react';

const BookDetails = ({ book }) => {

   // console.log(book);
        return (
            <>
                <div className='details-title'>
                    <h2>{book.title}</h2>
                </div>
                <div className='bookdetails'>
                    <div className='book-descrip'>{book.description}</div>
                    <div className='page-count'>Page count: {book.pageCount}</div>
                </div>
            </>
        );
}

export default BookDetails;