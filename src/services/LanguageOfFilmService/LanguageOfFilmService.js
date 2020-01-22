import axios from 'axios'
import { defaultBlacklist } from '../../constants'
import { removeKeysFromObject } from '../../helpers/ObjectHelpers/ObjectHelpers'

const host = process.env.REACT_APP_API_HOST

const endpoints = {
	v1: {
		films: `${host}/api/v1/films`,
		words: `${host}/api/v1/words`,
		cards: `${host}/api/v1/cards`
	}
}

export const LanguageOfFilmService = {
	findFilms() {
		return axios.get(endpoints.v1.films)
		.then(res => {
			return res.data
		})
		.catch(err => {
			console.error(`Error fetching films ${err.message}`)
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
			console.error(`Error fetching words ${err.message}`)
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
	}
}