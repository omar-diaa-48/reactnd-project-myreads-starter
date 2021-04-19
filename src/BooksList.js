import React, { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
class BooksList extends Component{
  
  state = {
    currentlyReading : [],
    wantToRead : [],
    read : []
  }

  componentDidMount = () => {
      BooksAPI.getAll()
          .then(apiBooks => {
            apiBooks.forEach(book => {
              if(book.shelf === "currentlyReading")
                this.setState((prevState) => ({currentlyReading : [...prevState.currentlyReading, book]}))
              
              if(book.shelf === "wantToRead")
                this.setState((prevState) => ({wantToRead : [...prevState.wantToRead, book]}))
              
              if(book.shelf === "read")
                this.setState((prevState) => ({read : [...prevState.read, book]}))

                this.render();
      });
      console.log(apiBooks);
    })
    .catch(err => console.log(err))  
  }

  render(){
      return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {
              (this.state.currentlyReading.length > 0 || 
                this.state.wantToRead.length > 0 || 
                this.state.read.length > 0) 
                &&
              (<div className="list-books-content">
                  <div>
                    <BookShelf bookshelfTitle={'Currently Reading'} shelfBooks={this.state.currentlyReading} />
                    <BookShelf bookshelfTitle={'Want to Read'} shelfBooks={this.state.wantToRead} />   
                    <BookShelf bookshelfTitle={'Read'} shelfBooks={this.state.read} />               
                  </div>
                </div>)
            }            
            <div className="open-search">
              <Link className='search-link' to='/search'>Add a book</Link>
            </div>
          </div>
        )
    }
}

export default BooksList;