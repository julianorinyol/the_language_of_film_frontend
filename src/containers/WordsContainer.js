import { connect } from 'react-redux'
import React from 'react'

const mapStateToProps = (state, ownProps) => {
  return {
    words: state.cards,
    currentIndex: state.currentIndex
  }
}

export default Component => {
	class WordsContainer extends React.Component {
		render() { 
			return <Component {...this.props} />
		}
	}
  return connect(mapStateToProps, {})(WordsContainer)
}
