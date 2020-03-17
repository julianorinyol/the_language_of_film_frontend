
import { LanguageOfFilmService } from '../../services/LanguageOfFilmService/LanguageOfFilmService.js' 

const SUBMIT_REVIEW = 'SUBMIT_REVIEW'

export const submitReview = (reviewData) => async (dispatch, getState) => {
	return LanguageOfFilmService.addReview(reviewData, getState().token)
	.then((films) => {
		console.log(`DISPATCH some action here now that the review is added`)
		// return dispatch({
		// 	type: UPDATE_FILMS,
		// 	payload: films,
		// })
	}).catch(err => {
		console.error(`error adding review ${err.message}`)
	})
  }