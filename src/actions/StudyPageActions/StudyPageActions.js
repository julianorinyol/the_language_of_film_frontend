import { StudyCardService } from '../../services/StudyCardService/StudyCardService.js'

export const changeCurrentIndex = (changeNum) => {
	return {
		type: 'CHANGE_CURRENT_INDEX',
		changeNum
	}
}

export const fetchCards = () => async dispatch => {
	const cards = await StudyCardService.findCards()
	.catch(err => {
		console.error(`error fetching words ${err.message}`)
	})

	return dispatch({
		type: 'RECEIVE_CARDS',
		cards
	})
}