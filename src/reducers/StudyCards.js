


const initialState = { currentIndex: 0, cards: [] }

export default function StudyCards(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_CURRENT_INDEX':
    	const nextIndex = state.currentIndex + action.changeNum
    	const max = state.cards.length - 1
    	const inBounds = (nextIndex >= 0 ) && (nextIndex <= max)

    	if(inBounds) {
    		return Object.assign({}, state, {
			currentIndex: nextIndex
		})
    	} else {
    		return state	
    	}
	case 'RECEIVE_CARDS':
		return Object.assign({}, state, {
		cards: action.cards
	})
    default:
      return state
  }
}