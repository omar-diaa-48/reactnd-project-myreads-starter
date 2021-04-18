import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BookDetails extends Component{
    state = {
        book : null
    }

    componentDidMount = () => {
        BooksAPI.get(this.props.match.params.bookId)
                .then(apiBook => this.setState({book : apiBook}))
    }

    render(){
        const book = this.state.book
        return(
            <div className='book-details'>
                {book !== null &&(
                    <div>
                        <div className='book'>
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 384, height: 772, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select onSelect={(e) => console.log(e.target.value)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="book-details-title">{book.title}</div>
                        <div className="">Authors : {book.authors && (book.authors.join(','))}</div>
                        <div>{`Pages : ${book.pageCount}`}</div>
                        <div>{`Published : ${book.publishedDate}`}</div>
                        <div>{`Language : ${book.language}`}</div>
                        <hr/>
                        <div>{book.description}</div>
                        <div><a href={book.previewLink} target='blank'>Google preview</a></div>
                    </div>
                )}
                <div className="open-search">
                    <Link className='close-search close-details' to='/'>Back to list</Link>
                 </div>
            </div>
        )
    }
}

export default BookDetails;