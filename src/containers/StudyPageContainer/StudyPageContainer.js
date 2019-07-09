import React from 'react'
import { connect } from 'react-redux'
import { changeCurrentIndex, fetchCardsForFilms } from '../../actions/StudyPageActions/StudyPageActions'
// import { getSelectedFilms } from '../../actions/FilmActions/FilmActions'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.cards.cards,
    films: state.films.films,
    currentIndex: state.cards.currentIndex,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	fetchCardsForFilms: (films) => {
  		return dispatch(fetchCardsForFilms(films))
  	},
    changeItemIndex: (num) => dispatch(changeCurrentIndex(num))
  }
}

export default Component => {
	class StudyPageContainer extends React.Component {
		componentDidMount() {
      const selectedFilms = Object.values(this.props.films).filter(film => film.selected)
			this.props.fetchCardsForFilms(selectedFilms)
		}

		render() { 
			return <Component {...this.props} />
		}
	}
  return connect(mapStateToProps, mapDispatchToProps)(StudyPageContainer)
}