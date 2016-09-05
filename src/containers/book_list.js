//there is no intrinsic relation between react and redux.
//they are linked together by react-redux library.
//One of the component is used as a container.
//a container is a react component which has direct connection to the state
//managed by redux.
//Container is a component that is aware of the state that is in redux.

//NOTE: COMPONENT STATE IS COMPLETELY DIFFERENT FROM APPLICATION STATE(REDUX reducer STATE)
//components can still have their own state and set it using this.setState().

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {

  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li
          key={book.title}
          className="list-group_item"
          onClick={() => this.props.selectBook(book)}>
            {book.title}
        </li>
      );
    });
  }

  render(){
    return (<ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}


//this function is the glue between react and redux.
function mapStateToProps(state){
  //the value returned in this function will become the props in BookList
  return(
    {books: state.books}
  );
}

//anything returned from this function(1st parameter in bindActionCreators)
//is passed as props to BookList.
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all the
  //reducers.
  //The purpose is to take what comes out from selectBook and
  //make sure it flows to all our reducers.
  //the bindActionCreators with dispatch says - take all the action creators
  //and pass them to all the reducers via dispatch function.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


//connect takes and function and component and returns a container.
//it needs to know about the new dispatch method - selectBook.
//Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
