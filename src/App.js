import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'; 
import Search from './Search';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books : []
  }

  componentDidMount = () => {
    BooksAPI.getAll()
            .then(books => {
              console.log(books);
              return books;
            })
            .then(apiBooks => {
              this.setState((prevState) => ({
              books : [...prevState.books, ...apiBooks]
            }))
          })
  }

  toggleState = ()=>{
    this.setState((prevState) => ({
      showSearchPage : !prevState.showSearchPage
    }))
  }

  render() {
    return (
      <div className="app">
        {this.state.books.length !== 0 && 
        (
          this.state.showSearchPage 
            ? <Search books={this.state.books} toggleState={this.toggleState}/> 
            : <BooksList books={this.state.books} toggleState={this.toggleState}/>
        )
        }
      </div>
    )
  }
}

export default BooksApp
