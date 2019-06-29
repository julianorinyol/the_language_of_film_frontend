
const films = {
	'herr_lehmann': {
		name: 'Herr Lehmann',
		selected: true
	}
}

const initialState = { films }

export default function FilmsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}