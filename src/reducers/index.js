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

      const newPeople = [...state.people, newPerson]
      
      localStorage.setItem('people-storage', JSON.stringify(newPeople))
      
      return {
        ...state,
        people: newPeople, 
      }

    default:
      return state
  }
}

export default reducer
