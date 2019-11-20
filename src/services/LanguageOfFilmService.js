import Lehmann from '../data/herr_lehmann.json'

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