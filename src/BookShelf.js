import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component{
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                        this.props.myBooks 
                        ?
                        (
                            this.props.shelfBooks.map(book => (
                                <li key={book.id}>    
                                {this.props.myBooks.some(b => b.id === book.id)
                                    ? <Book book={book} shelf={this.props.myBooks.find(b => b.id === book.id).shelf}/> 
                                    : <Book book={book} shelf='none'/>} 
                                </li>
                        )))
                        :   
                        (
                            this.props.shelfBooks.map(book => (
                                <li key={book.id}>
                                    <Book book={book} /> 
                                </li>
                        )))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}    


export default BookShelf;