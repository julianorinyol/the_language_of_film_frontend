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
}

export const fetchCardsForFilms = (films) => {
	let combinedWords = {}
	for(const film of films) {
		const filmWords = fetchWordsForFilm(film)	
		for(const wordKey in filmWords) {
			let wordInfo = filmWords[wordKey]
			
			
			if(defaultBlacklist.indexOf(wordInfo.word.trim()) !== -1) {
				continue
			}

			let newWord = convertWord(wordInfo, film)


			if(wordKey in combinedWords ) {
			  let existingWord = combinedWords[wordKey]
		      let combinedExamples = existingWord['examples'].concat(newWord['examples'])
		      let uniqueExamples = [...new Set(combinedExamples)]; 

		      combinedWords[wordKey]['examples'] = uniqueExamples
		      combinedWords[wordKey]['films'].push(newWord.films[0])
			} else {
				combinedWords[wordKey] = newWord
			}
		}
	}
	
	return {
		type: 'RECEIVE_CARDS',
		cards: combinedWords
	}
}


// export const setSelectedCards = (films) => {
// 	const film = 'herr_lehmann'
// 	let words = []
// 	for(const film of films) {
// 		words.concat()
// 	}
// 	const words = fetchWordsForFilm(film)
// 	return receiveCards(words, film)
// }

const convertWord = (wordInfo, film ) => {
	return {
      question: wordInfo.word,
      answer: wordInfo.english,
      examples: JSON.parse(wordInfo.examples),
      films: [ film ]
    }
}

function convertWords(words, film) {
  let converted = {}

  for(const wordKey in words) {
  	const wordInfo = words[wordKey]
  	converted[wordInfo.word] = {
      question: wordInfo.word,
      answer: wordInfo.english,
      examples: JSON.parse(wordInfo.examples),
      films: [film]
    }
  }

  return converted
}