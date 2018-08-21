import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {
	renderList(){
		return this.props.books.map((book) => {
			return(
				<li 
				key = {book.title}
				onClick = {() => this.props.selectBook(book)} 
				className = "list-group-item"> 
				{book.title} 
				</li>
			)

		})
	}

	render(){
		console.log(this.props)		
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)

	}
	
}

// Anything from this function will end up as props
// on the BookList container

function mapStateToProps(state){
	//Whatever return here will show up as props
	// inside of BookList

	return {
		// asdf: '123'
		books: state.books
	};
}


function mapDispatchToProps (dispatch) {
	// whenever the selectBook is called, the result should be
	// pass to all reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a Component to a container, 
//it need to know this new dispatch method. Make is available as a props

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
