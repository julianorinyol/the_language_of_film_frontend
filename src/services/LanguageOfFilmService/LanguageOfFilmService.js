import axios from 'axios'
import { defaultBlacklist } from '../constants'

const host = process.env.REACT_APP_API_HOST

const endpoints = {
	v1: {
		films: `${host}/api/v1/films`,
		words: `${host}/api/v1/words`
	}
}

const removeBlackListed = (words) => {	
	const result = {}
	for(const wordKey in words) {
		const wordInfo = words[wordKey]
		if(defaultBlacklist.indexOf(wordInfo.word.trim()) !== -1) {
			continue
		} else {
			result[wordKey] = wordInfo
		}
	}
	return result
}

export const LanguageOfFilmService = {
	findFilms() {
		return axios.get(endpoints.v1.films)
		.then(res => {
			return res.data
		})
		.catch(err => {
			console.error(`Error fetching films`, err.message)
			throw err
		})
	},
	findWords() {
		return axios.get(endpoints.v1.words)
		.then(res => {
			const whitelistedWords = removeBlackListed(res.data.words)
			return whitelistedWords
		})
		.catch(err => {
			console.error(`Error fetching words`, err.message)
			throw err
		})
	}
}