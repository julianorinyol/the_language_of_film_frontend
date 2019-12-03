import { LanguageOfFilmService } from '../../services/LanguageOfFilmService/LanguageOfFilmService.js' 

const UPDATE_FILMS = 'UPDATE_FILMS'

export const fetchFilms = () => async dispatch => {
	return LanguageOfFilmService.findFilms()
	.then((films) => {
		return dispatch({
			type: UPDATE_FILMS,
			payload: films,
		})
	}).catch(err => {
		console.error(`error fetching films ${err.message}`)
	})
  }

export const selectFilm = (film) => {
	return {
		type: 'SELECT_FILM',
		film
	}
}