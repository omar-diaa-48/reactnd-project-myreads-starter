import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class Search extends Component{

    state = {
      query : '',
      books : []
    }

    handleSubmit = (query) => {
      BooksAPI.search(query)
              .then(resultBooks => {
                this.setState({books : resultBooks})
              })
    }

    handleChange = (e) => {
      this.setState({query : e.target.value})
    }

    render(){
        return(
            <div className="search-books">
              <div className="search-books-bar">
                <button className="close-search" onClick={() => this.props.toggleState()}>Close</button>
                <div className="search-books-input-wrapper">
                  {
                    this.state.books.length > 0 && 
                    (
                        <BookShelf bookshelfTitle={`Search results for ${this.state.query}`} shelfBooks={this.state.books} /> 
                    )
                  }
                  <input type="text" 
                          onKeyDown={e => e.key === 'Enter' ? this.handleSubmit(e.target.value) : null}
                          onChange={this.handleChange} 
                          placeholder="Search by title or author, when you finish press enter"/>
  
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
          )
    }
}

export default Search;