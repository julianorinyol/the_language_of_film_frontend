import Lehmann from '../data/herr_lehmann.json'

const mapDataToFilm = {
	'herr_lehmann': Lehmann
}
export const fetchWordsForFilm = (film) => {
	return mapDataToFilm[film].words
}