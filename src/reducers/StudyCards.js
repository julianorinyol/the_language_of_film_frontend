


const initialState = { currentIndex: 0, cards: {} }

export default function StudyCards(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_CURRENT_INDEX':
    	const nextIndex = state.currentIndex + action.changeNum
    	const max = Object.keys(state.cards).length - 1
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
      cards: combineCards(state.cards, action.cards)
    })
    default:
      return state
  }
}

const combineCards = (existingCards, newCards) => {
  const combinedCards = {...existingCards}
  for(const cardKey in newCards) {
    const newCard = newCards[cardKey]
    const oldCard = combinedCards[cardKey]
    
    if((cardKey in combinedCards)) {
      let filmNotInArray = oldCard['films'].indexOf(newCard['films'][0]) === -1
      if(filmNotInArray) {
        let combinedExamples = oldCard['examples'].concat(newCard['examples'])
        let uniqueExamples = [...new Set(combinedExamples)]; 
        combinedCards[cardKey]['examples'] = uniqueExamples
        combinedCards[cardKey]['films'].push(newCard.films[0])  
      }
    } else {
      combinedCards[cardKey] = newCard
    }
  }
  return combinedCards
} 