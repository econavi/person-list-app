
const peopleLoaded = (newPeople) => {
  return {
    type: 'PEOPLE_LOADED',
    payload: newPeople
  }
}

export {
  peopleLoaded
}
