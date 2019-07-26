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

const openModal = (options) => {
  return {
    type: 'OPEN_MODAL',
    ...options,
  }
}

const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
  }
}

const personUpdate = (newDataPerson) => {
  return {
    type: 'PERSON_UPDATE',
    payload: newDataPerson,
  }
}

export {
  peopleLoaded,
  personLoaded,
  addNewPerson,
  openModal,
  closeModal,
  personUpdate,
}
