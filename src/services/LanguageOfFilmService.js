import Lehmann from '../data/herr_lehmann.json'
import axios from 'axios'
const host = process.env.REACT_APP_API_HOST

const endpoints = {
	v1: {
		films: `${host}/api/v1/films`
	}
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
	}
}

const mapDataToFilm = {
	'Herr Lehmann': Lehmann,
	'fake_movie1': {
		words: {
			"verdammte": {
			  "word": "verdammte",
			  "english": " damned",
			  "examples": "[\"blabla fake\", \"Na ja jetzt auch egal\\nverdammte Scheiße\", \"Nein das ist nicht mein Hund\\nverdammte Scheiße\", \"Ich liebe dich Verdammte Scheiße\", \"Mach ich sowieso nie\\nAber ich rege mich auf verdammte Scheiße\"]"
			},
			"scheißhund": {
			  "word": "scheißhund",
			  "english": "fucking fog",
			  "examples": "[\"test 2\", \"test 3\"]"
			},	

		}	
	}
}

export const fetchWordsForFilm = (film) => {
	return mapDataToFilm[film.name].words
}