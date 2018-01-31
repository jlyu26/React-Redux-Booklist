import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// {
// 	books: [{title: 'Harry Potter'},{title: 'JavaScript'}],	// Book Reducer
// 	activeBook: {title: 'JavaScript: The Good Parts'} // ActiveBook Reducer
// }
// The mapping of state:
// This reducer adds a key "books" to our global application state,
// and the value is whatever gets returned from BooksReducer,
// which in this case is an array of books.
const rootReducer = combineReducers({
  books: BooksReducer
  // anotherKey: AnotherReducer
});

export default rootReducer;
