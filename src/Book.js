import React from 'react';
import { withRouter } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

const Book = (props) => { 

    const handleSelect = (e) => {
        if(e.target.selectedIndex === 0 ){
            e.preventDefault();
        }
        else if(e.target.selectedIndex === 5)
            props.history.push(`/${e.target.value}`)
        else
        {
            BooksAPI.update(props.book, e.target.value)
                    .then((res) => {
                        if(props.location.pathname === '/')
                            window.location.reload();
                        else
                            props.history.push('/');
                    })
        }         
    }

    return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                        <select onChange={handleSelect}>
                            <option value='decide'>What would you like to do?</option>
                            <optgroup label="Move to">
                                <option disabled={props.book.shelf === 'currentlyReading'} value="currentlyReading">Currently Reading</option>
                                <option disabled={props.book.shelf === 'wantToRead'} value="wantToRead">Want to Read</option>
                                <option disabled={props.book.shelf === 'read'} value="read">Read</option>
                                <option value="none">None</option>
                            </optgroup>
                            <optgroup label='Details'>
                                <option value={props.book.id}>More about this book </option>
                            </optgroup>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors && (props.book.authors.map(a=>`${a}, `))}</div>
            </div>
    )
}

export default withRouter(Book);