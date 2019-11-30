import { LanguageOfFilmService } from './LanguageOfFilmService'
/*
 * TODO - move all of this functionality to backend. 
 * there should be a microservice just for the flash card app functionality
 * and it should pull specific film related data from a separate microservice 
 */

const convertWord = (wordInfo ) => {
	return {
      question: wordInfo.word,
      answer: wordInfo.english,
      examples: JSON.parse(wordInfo.examples)
    }
}

function convertWordsToCard(words) {
  let converted = {}
  for(const wordKey in words) {
  	const wordInfo = words[wordKey]
	converted[wordInfo.word] = convertWord(wordInfo)
  }

  return converted
}

export const StudyCardService = {
    findCards() {
        return LanguageOfFilmService.findWords()
            .then(words => {
                const cards = convertWordsToCard(words)
                return cards
            })
	}
}