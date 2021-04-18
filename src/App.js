import React from 'react'
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
  }

  toggleState = ()=>{
    this.setState((prevState) => ({
      showSearchPage : !prevState.showSearchPage
    }))
  }

  render() {
    return (
      <div className="app">
        {
          this.state.showSearchPage 
            ? <Search toggleState={this.toggleState}/> 
            : <BooksList toggleState={this.toggleState}/>
        }
      </div>
    )
  }
}

export default BooksApp
