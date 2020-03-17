export default function TokenReducer(state = null, action) {
  switch (action.type) {
	case 'SET_TOKEN':
		return action.payload
	case 'REMOVE_TOKEN':
		return null
    default:
      return state
  }
}