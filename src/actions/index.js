// contains all action creaters we make

export function selectBook(book) {
	// selectBook is an action creater, needs to return an action,
	// an object with a `type` property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}

