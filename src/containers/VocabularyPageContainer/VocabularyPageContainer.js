import React from 'react'
import { connect } from 'react-redux'
import { changeCurrentIndex, fetchCards } from '../../actions/StudyPageActions/StudyPageActions'
import { submitReview } from '../../actions/ReviewActions/ReviewActions'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.cards.cards,
    films: state.films.films,
    currentIndex: state.cards.currentIndex,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	fetchCards: (films) => {
  		return dispatch(fetchCards())
  	},
    submitReview: (review) => {
      return dispatch(submitReview(review))
    },

    changeItemIndex: (num) => dispatch(changeCurrentIndex(num))
  }
}

export default Component => {
	class VocabularyPageContainer extends React.Component {
		componentDidMount() {
			this.props.fetchCards()
		}

		render() { 
			return <Component {...this.props} />
		}
	}
  return connect(mapStateToProps, mapDispatchToProps)(VocabularyPageContainer)
}