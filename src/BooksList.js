import React, { Component } from 'react';
import BookShelf from './BookShelf';
//import BookShelf from './BookShelf';

class BooksList extends Component{
  
  state = {
    currentlyReading : [],
    wantToRead : [],
    read : []
  }

  componentDidMount = () => {
    this.props.books.forEach(book => {
      if(book.shelf === "currentlyReading")
        this.setState((prevState) => ({currentlyReading : [...prevState.currentlyReading, book]}))
      
      if(book.shelf === "wantToRead")
        this.setState((prevState) => ({wantToRead : [...prevState.wantToRead, book]}))
      
      if(book.shelf === "read")
        this.setState((prevState) => ({read : [...prevState.read, book]}))
    });

    console.log(this.props.books);
  }

  render(){
      return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf bookshelfTitle={'Currently Reading'} shelfBooks={this.state.currentlyReading} />
                <BookShelf bookshelfTitle={'Want to Read'} shelfBooks={this.state.wantToRead} />   
                <BookShelf bookshelfTitle={'Read'} shelfBooks={this.state.read} />                
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.props.toggleState()}>Add a book</button>
            </div>
          </div>
        )
    }
}

export default BooksList;