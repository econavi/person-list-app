export default class AppService {
  
  dummyData = [
    { 
      id: 1,
      name: 'Михаил',
      surname: 'Горячев',
      position: 'Интернет-маркетолог' },
    { 
      id: 2,
      name: 'Татьяна',
      surname: 'Долгова',
      position: 'HR' },
  ]

  getData = () => {
    const stoarge = JSON.parse(localStorage.getItem('people-storage'))
    return stoarge || this.dummyData 
  }

  getAllPeople = () => {
    return this.getData()
  }
  
  getPerson = (id) => {
    return this.getData().find((elem) => id === elem.id)
  }
}
