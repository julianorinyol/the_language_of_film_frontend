import { LanguageOfFilmService } from '../../services/LanguageOfFilmService/LanguageOfFilmService.js' 

const UPDATE_FILMS = 'UPDATE_FILMS'

export const fetchFilms = () => async (dispatch, getState) => {
	return LanguageOfFilmService.findFilms(getState().token)
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