const initialState = {
  people: null,
  selectedPersonData: null,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_PEOPLE_SUCCESS':
      return {
        people: action.payload,
      }

    case 'FETCH_PERSON_SUCCESS':
      return {
        selectedPersonData: action.payload,
      }

    default:
      return state
  }
}

export default reducer
