import { defaultBlacklist } from '../../constants'
import { fetchWordsForFilm } from '../../services/LanguageOfFilmService'

export const changeCurrentIndex = (changeNum) => {
	return {
		type: 'CHANGE_CURRENT_INDEX',
		changeNum
	}
}

const receiveCards = (words) => {
	const filteredWords = words.filter(word => {
	  return defaultBlacklist.indexOf(word.word.trim()) === -1
	})

	const transformed = convertWords(filteredWords)

	return {
		type: 'RECEIVE_CARDS',
		cards: transformed
	}
}

export const fetchCards = () => {
	const words = fetchWordsForFilm('herr_lehmann')
	return receiveCards(words)
}


function convertWords(words) {
  let converted = []

  for(const word of words) {
    converted.push({
      question: word.word,
      answer: word.english,
      examples: JSON.parse(word.examples)
    })

  }

  return converted
}