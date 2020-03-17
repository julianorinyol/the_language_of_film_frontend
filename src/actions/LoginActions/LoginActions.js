import { LanguageOfFilmService } from '../../services/LanguageOfFilmService/LanguageOfFilmService.js' 

const SET_TOKEN = 'SET_TOKEN'
const REMOVE_TOKEN = 'REMOVE_TOKEN'

export const login = (email, password) => async dispatch => {
	return LanguageOfFilmService.login(email, password)
	.then((token) => {
		return dispatch({
			type: SET_TOKEN,
			payload: token,
		})
	}).catch(err => {
		console.error(`error loging in: ${err.message}`)
	})
  }


export const logout = () => async dispatch => {
	return dispatch({
		type: REMOVE_TOKEN
	})
 }
