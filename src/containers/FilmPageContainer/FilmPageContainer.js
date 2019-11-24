
import { connect } from 'react-redux'
import React from 'react'
import { selectFilm, fetchFilms } from '../../actions/FilmActions/FilmActions'

const mapStateToProps = (state, ownProps) => {
  return {
    films: state.films.films,
  }  
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectFilm: (film) => dispatch(selectFilm(film)),
    fetchFilms: (film) => dispatch(fetchFilms()),
  }  
}

export default Component => {	
	class FilmPageContainer extends React.Component {
    componentWillMount() {
      this.props.fetchFilms()
    }
		render() { 
      return <Component {...this.props} />
		}
	}

  return connect(mapStateToProps, mapDispatchToProps)(FilmPageContainer)
}
