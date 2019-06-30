const peopleLoaded = (newPeople) => {
  return {
    type: 'FETCH_PEOPLE_SUCCESS',
    payload: newPeople,
  }
}

const personLoaded = (newPerson) => {
  return {
    type: 'FETCH_PERSON_SUCCESS',
    payload: newPerson,
  }
}

const addNewPerson = (newPerson) => {
  return {
    type: 'ADD_NEW_PERSON',
    payload: newPerson,
  }
}

export {
  peopleLoaded,
  personLoaded,
  addNewPerson,
}
