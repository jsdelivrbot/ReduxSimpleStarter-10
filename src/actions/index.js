//actions are payloads of information that send data to your store.
//an action creator is just a function that create actions.
//action creators return an action.

export function selectBook(book) {
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
} 
