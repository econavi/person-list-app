export default class AppService {

  data = [
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

  getAllPeople = () => {
    return this.data
  }
  
  getPerson = (id) => {
    return this.data.find((elem) => id === elem.id)
  }
}
