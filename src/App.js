import React from 'react'
import './App.css'
import './custom.css'
import BooksList from './BooksList'; 
import Search from './Search';
import {Route} from 'react-router-dom'; 
import BookDetails from './BookDetails';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
    myBooks : []
  }

  componentDidMount = () => {
    BooksAPI.getAll()
        .then(apiBooks => {
          this.setState({myBooks : apiBooks})  
        })
        .catch(err => console.log(err))  
  }

  render() {
    return (
      <div className="app">
        {this.state.myBooks.length > 0 
        &&
        (
        <div>
          <Route exact path='/' render={() => <BooksList myBooks={this.state.myBooks}/>}/>
          <Route path='/search' render={() => <Search myBooks={this.state.myBooks}/>}/> 
          <Route path='/:bookId' component={BookDetails}/>
        </div>
        )
        }
      </div>
    )
  }
}

export default BooksApp
