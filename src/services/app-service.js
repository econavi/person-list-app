import LocalStorageManager from './localstorage'

export default class AppService {
  
  dummyData = [
    { 
      name: 'Михаил',
      surname: 'Горячев',
      position: 'Интернет-маркетолог',
      id: 1,
    },
    { 
      name: 'Татьяна',
      surname: 'Долгова',
      position: 'HR',
      id: 2,
    },
  ]

  getData = () => {
    const storage = LocalStorageManager.get()
    return storage || this.dummyData 
  }

  getAllPeople = () => {
    return this.getData()
  }
  
  getPerson = (id) => {
    return this.getData().find((elem) => id === elem.id)
  }
}
