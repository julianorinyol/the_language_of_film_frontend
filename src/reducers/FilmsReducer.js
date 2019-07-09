
const films = {
	'herr_lehmann': {
		name: 'Herr Lehmann',
		selected: true,
		img: '/images/herr_lehmann_portrait.jpg'
	},
	'fake_movie1': {
		name: 'fake_movie1',
		selected: false,
		img: '/images/herr_lehmann_portrait.jpg'
	},
	'fake_movie2': {
		name: 'fake_movie2',
		selected: false,
		img: '/images/herr_lehmann_portrait.jpg'
	},
	'fake_movie3': {
		name: 'fake_movie3',
		selected: false,
		img: '/images/herr_lehmann_portrait.jpg'
	},
}

const initialState = { films }

export default function FilmsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}