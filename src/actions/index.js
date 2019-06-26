
const peopleLoaded = (newPeople) => {
  return {
    type: 'FETCH_PEOPLE_SUCCESS',
    payload: newPeople,
  }
}

const personSelected = (personId) => {
  return {
    type: 'PERSON_SELECTED',
    payload: personId,
  }
}

const personLoaded = (newPerson) => {
  return {
    type: 'FETCH_PERSON_SUCCESS',
    payload: newPerson,
  }
}

export {
  peopleLoaded,
  personSelected,
  personLoaded,
}
