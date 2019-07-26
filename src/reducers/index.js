const initialState = {
  people: null,
  selectedPersonData: null,
  modalIsOpen: false,
  modalTitle: null,
  modalContent: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE_SUCCESS':
      return {
        people: action.payload,
      }

    case 'FETCH_PERSON_SUCCESS':
      return {
        ...state,
        selectedPersonData: action.payload,
      }

    case 'ADD_NEW_PERSON':
      const personData = action.payload
      
      const nextPersonId = (people) => {
        const idArr = people.reduce((acc, elem) => {
          if (!elem) return acc
          return [...acc, elem.id]
        }, [])

        const lastId = (arr) => {
          return arr.reduce((acc, elem) => {
            if (!elem) return acc
            return acc > elem ? acc : elem
          })
        }

        return lastId(idArr) + 1
      }

      const newPerson = { ...personData, id: nextPersonId(state.people) }
      const newPeople = [ ...state.people, newPerson ]

      return {
        ...state,
        people: newPeople, 
      }
    
    case 'OPEN_MODAL':
      return {
        ...state,
        modalIsOpen: true,
        modalTitle: action.modalTitle,
        modalContent: action.modalContent,
      }
    
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalIsOpen: false,
        modalTitle: null,
        modalContent: null,
      }
    
    case 'PERSON_UPDATE':
      const { people } = state
      const { id, name, surname, position } = action.payload
      const idx = people.findIndex(item => item.id === +id)
      
      const newDataPerson = {
        id: +id,
        name, surname, position,
      }

      return {
        ...state,
        people: [
          ...state.people.slice(0, idx),
          { ...newDataPerson },
          ...state.people.slice(idx + 1),
        ]
      }
    
    default:
      return state
  }
}

export default reducer
