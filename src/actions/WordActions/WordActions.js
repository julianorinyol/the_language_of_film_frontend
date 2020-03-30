import { LanguageOfFilmService } from '../../services/LanguageOfFilmService/LanguageOfFilmService.js' 
// import { logout } from "../LoginActions/LoginActions"
const wordToPhrase = wordData => {
		const phrase = {
			phrase: wordData.word,
			language: wordData.language,
			translations: (('translations' in wordData) && wordData.translations.length > 0) ? wordData.translations.map(wordToPhrase) : []
		}

		return phrase
	}

export const addWords = (wordsData) => async (dispatch, getState) => {

	const wordsOnly = wordsData.filter(rawWord => rawWord.word.split(' ').length === 1)
    const phrasesRaw = wordsData.filter(rawWord => rawWord.word.split(' ').length !== 1)
	const transformedPhrases = phrasesRaw.map(wordToPhrase)
	const promises = []
	if(wordsOnly.length) {
		promises.push(LanguageOfFilmService.addWords(wordsOnly, getState().token)
		.then((words) => {
			console.log(`YIPEE YAY`)

		}).catch(err => {
			console.error(`error adding bulk words ${err.message}`)
			if('response' in err && err.response && 'status' in err.response && err.response.status === 401) {
				console.error(`oh no!, ${err.message}`, err)
				// return dispatch(logout())
			}				
		}))
	}

	if(transformedPhrases.length) {
		promises.push(LanguageOfFilmService.addPhrases(transformedPhrases, getState().token)
			.then((phrases) => {
				console.log(`YIPEE YAY`)

			}).catch(err => {
				console.error(`error adding bulk phrases ${err.message}`)
				if('response' in err && err.response && 'status' in err.response && err.response.status === 401) {
					console.error(`oh no!, ${err.message}`, err)
					// return dispatch(logout())
				}		
			}))
	}
	
	return Promise.all(promises)
}
