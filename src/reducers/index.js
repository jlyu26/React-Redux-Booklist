import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// {
// 	books: [{title: 'Harry Potter'},{title: 'JavaScript'}],	// Book Reducer
// 	activeBook: {title: 'JavaScript: The Good Parts', pages: 101} // ActiveBook Reducer
// }

// The mapping of state:
// This reducer adds a key "books" to our global application state,
// and the value is whatever gets returned from BooksReducer,
// which in this case is an array of books.
// combineReducers() 生成全局state object
// state对象的结构由传入的多个reducer的key决定
// 更详细内容参见combineReducers()源码
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
