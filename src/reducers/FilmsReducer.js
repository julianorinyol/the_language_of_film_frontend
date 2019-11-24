const mapArrayByField = (arr, field) => {
	const res = {}
	
	arr.forEach(item => {
		res[item[field]] = item
	})

	return res
}

export default function FilmsReducer(state = {films:[]}, action) {
  switch (action.type) {
	case 'UPDATE_FILMS':
		const films = action.payload.map(rawFilm => {
			return {
				...rawFilm, 
				selected: false
			}	
		})
		const filmMap = mapArrayByField(films, 'name')

		const newState = {...state, films: filmMap}
		return newState
    default:
      return state
  }
}