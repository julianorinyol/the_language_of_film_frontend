import axios from 'axios'
import { defaultBlacklist } from '../../constants'
import { removeKeysFromObject } from '../../helpers/ObjectHelpers/ObjectHelpers'

const host = process.env.REACT_APP_API_HOST

const endpoints = {
	v1: {
		films: `${host}/api/v1/films`,
		words: `${host}/api/v1/words`,
		phrases: `${host}/api/v1/phrases`,
		cards: `${host}/api/v1/cards`,
		login: `${host}/api/v1/login`,
		reviews: `${host}/api/v1/reviews`,
	}
}
const addOrUpdateManyEndpoint = endpoint => `${endpoint}/add_or_update_many`
// curl --header "Content-Type: application/json" \
//   --request POST \
//   --data '{"email":"julian@bla.com","password":"password123"}' \
  

export const LanguageOfFilmService = {
	login(email, password) {
		return axios.post(endpoints.v1.login, {email, password})
		.then(res => {
			return res.data.token
		})
		.catch(err => {
			console.error(`Error fetching films ${err.message}`)
			throw err
		})
	},
	findFilms(token) {
		const options = {
		  headers: {
		    'Authorization': `Bearer ${token}`
		  }
		}

		return axios.get(endpoints.v1.films, options)
		.then(res => {
			return res.data
		})
		.catch(err => {
			console.error(`Error fetching films ${err.message}`)
			const response = err.response
			if(!response) {
				console.error('Server is unresponsive.')
			}
			if(response.status === 401) {
				// localStorage.removeItem("state")
			}
			throw err
		})
	},
	addFilm(filmData, token) {
		const options = {
		  headers: {
		    'Authorization': `Bearer ${token}`
		  }
		}

		return axios.post(endpoints.v1.films, filmData, options)
		.then(res => {
			return res.data
		})
		.catch(err => {
			console.error(`Error adding film ${err.message}`)
			throw err
		})
	},
	findWords() {
		return axios.get(endpoints.v1.words)
		.then(res => {
			const whitelistedWords = removeKeysFromObject(res.data, defaultBlacklist)
			return whitelistedWords
		})
		.catch(err => {
			console.error(`Error fetching words ${err.response}`)
			throw err
		})
	},
	addWord(wordData, token) {
		const options = {
		  headers: {
		    'Authorization': `Bearer ${token}`
		  }
		}

		if(typeof wordData !== 'object') {
			throw new Error(`Word data should be an object, use addWords for multiple.`)
		}

		return axios.post(endpoints.v1.words, wordData, options)
		.then(res => {
			return res.data
		})
		.catch(err => {
			console.error(`Error adding word(s) ${err.message}`)
			throw err
		})
	},
	addWords(wordsData, token) {
		const options = {
		  headers: {
		    'Authorization': `Bearer ${token}`
		  }
		}

		return axios.post(addOrUpdateManyEndpoint(endpoints.v1.words), wordsData, options)
		.then(res => {
			return res.data
		})
		.catch(err => {
			console.error(`Error adding word(s) ${err.message}`)
			throw err
		})
	},

	addPhrases(phrasesData, token) {
		const options = {
		  headers: {
		    'Authorization': `Bearer ${token}`
		  }
		}

		return axios.post(addOrUpdateManyEndpoint(endpoints.v1.phrases), phrasesData, options)
		.then(res => {
			return res.data
		})
		.catch(err => {
			console.error(`Error adding phrase(s) ${err.message}`)
			throw err
		})
	},
	findCards() {
		return axios.get(endpoints.v1.cards)
		.then(res => {
			const whitelistedCards = removeKeysFromObject(res.data, defaultBlacklist)
			return whitelistedCards
		})
		.catch(err => {
			console.error(`Error fetching cards ${err.message}`)
			throw err
		})
	},
	addReview(reviewData, token) {
		const options = {
		  headers: {
		    'Authorization': `Bearer ${token}`
		  }
		}

		return axios.post(endpoints.v1.reviews, reviewData, options)
		.then(res => {
			return res.data
		})
		.catch(err => {
			console.error(`Error fetching films ${err.message}`)
			throw err
		})
	}
}