import { connect } from 'react-redux'
import React from 'react'
import { addWords } from '../actions/WordActions/WordActions'

const mapStateToProps = (state, ownProps) => {
  return {
    words: state.cards.cards,
    currentIndex: state.cards.currentIndex
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addWords: (words) => dispatch(addWords(words)),
  }  
}


export default Component => {
	
	class WordsContainer extends React.Component {
		render() { 
			return <Component {...this.props} />
		}
	}

  return connect(mapStateToProps, mapDispatchToProps)(WordsContainer)
}
