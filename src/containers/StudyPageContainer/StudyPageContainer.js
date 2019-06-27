import React from 'react'
import { connect } from 'react-redux'
import { changeCurrentIndex, fetchCards } from '../../actions/StudyPageActions/StudyPageActions'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.cards,
    currentIndex: state.currentIndex
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	fetchCards: () => {
  		return dispatch(fetchCards())
  	},
    changeItemIndex: (num) => dispatch(changeCurrentIndex(num))
  }
}

export default Component => {
	class StudyPageContainer extends React.Component {
		componentDidMount() {
			this.props.fetchCards()
		}

		render() { 
			return <Component {...this.props} />
		}
	}
  return connect(mapStateToProps, mapDispatchToProps)(StudyPageContainer)
}