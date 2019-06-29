import { defaultBlacklist } from '../../constants'
import { fetchWordsForFilm } from '../../services/LanguageOfFilmService'

export const changeCurrentIndex = (changeNum) => {
	return {
		type: 'CHANGE_CURRENT_INDEX',
		changeNum
	}
}

const receiveCards = (words) => {
	const filteredWords = {}

	for(const wordKey in words) {
		const wordInfo = words[wordKey]

		if(defaultBlacklist.indexOf(wordInfo.word.trim()) === -1) {
			filteredWords[wordKey] = wordInfo
		}
	}

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
  let converted = {}

  for(const wordKey in words) {
  	const wordInfo = words[wordKey]
  	converted[wordInfo.word] = {
      question: wordInfo.word,
      answer: wordInfo.english,
      examples: JSON.parse(wordInfo.examples)
    }
  }

  return converted
}