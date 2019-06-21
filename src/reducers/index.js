const initialState = {
  people: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'PEOPLE_LOADED':
      return {
        people: action.payload
      }

    default:
      return state
  }
}

export default reducer
