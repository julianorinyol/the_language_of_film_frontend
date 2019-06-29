
import { connect } from 'react-redux'
import React from 'react'
import { selectFilm } from '../../actions/FilmPageActions/FilmPageActions'

const mapStateToProps = (state, ownProps) => {
  return {
    films: state.films.films,
  }  
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectFilm: (film) => dispatch(selectFilm(film)),
  }  
}

export default Component => {	
	class FilmPageContainer extends React.Component {
		render() { 
			return <Component {...this.props} />
		}
	}

  return connect(mapStateToProps, mapDispatchToProps)(FilmPageContainer)
}
