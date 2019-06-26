const initialState = {
  people: null,
  selectedPersonData: null,
  selectedPersonId: null,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_PEOPLE_SUCCESS':
      return {
        ...state,
        people: action.payload,
      }

    case 'PERSON_SELECTED':
      return {
        ...state,
        selectedPersonId: action.payload,
      }

    case 'FETCH_PERSON_SUCCESS':
      return {
        ...state,
        selectedPersonData: action.payload,
      }

    default:
      return state
  }
}

export default reducer
