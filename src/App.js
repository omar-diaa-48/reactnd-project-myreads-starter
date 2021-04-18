import React from 'react'
import './App.css'
import './custom.css'
import BooksList from './BooksList'; 
import Search from './Search';
import {Route} from 'react-router-dom'; 
import BookDetails from './BookDetails';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => <BooksList/>}/>
        <Route path='/search' render={() => <Search/>}/> 
        <Route path='/:bookId' component={BookDetails}/>
      </div>
    )
  }
}

export default BooksApp
