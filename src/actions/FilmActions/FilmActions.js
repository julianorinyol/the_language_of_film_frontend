import { LanguageOfFilmService } from '../../services/LanguageOfFilmService/LanguageOfFilmService.js' 
// import { logout } from "../LoginActions/LoginActions"
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
		if('response' in err && 'status' in err.response && err.response.status === 401) {
			// return dispatch(logout())
		}
		
	})
  }

export const addFilm = (filmData) => async (dispatch, getState) => {

	return LanguageOfFilmService.addFilm(filmData, getState().token)
	.then((films) => {
		//todo dispatch something here.
	}).catch(err => {
		console.error(`error adding films ${err.message}`)
		if('response' in err && 'status' in err.response && err.response.status === 401) {
			// todo return dispatch(logout())
		}
		
	})
}

export const selectFilm = (film) => {
	return {
		type: 'SELECT_FILM',
		film
	}
}