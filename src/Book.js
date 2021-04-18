import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Book = (props) => { 

    const handleSelect = (e) => {
        if(e.target.selectedIndex === 4)
            props.history.push(`/${e.target.value}`)
        else
            console.log(e.target.value);
    }

    return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                        <select onChange={handleSelect}>
                            <optgroup label="Move to">
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
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