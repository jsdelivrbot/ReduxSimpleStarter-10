

//set the state to null as default. When the app loads for the first time, the
//state will be undefined. reducers should never return undefined as react
//throws an error.
export default function activeBook(state = null, action){
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state; //this is the default.
}
