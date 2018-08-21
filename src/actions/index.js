export function selectBook (book) {
	// select book is an ActionCreator, it need to return an action
	// an obj with a type property
	return {
		type:'BOOK_SELECTED',
		payload:book

	};
} 