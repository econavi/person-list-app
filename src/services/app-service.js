import LocalStorageManager from './localstorage'

export default class AppService {
  
  dummyData = [
    { 
      name: 'Михаил',
      surname: 'Горячев',
      position: 'Интернет-маркетолог',
      info: 'Настоящее имя Питер Паркер — персонаж, супергерой, появляющийся в комиксах издательства Marvel Comics, созданный Стэном Ли и Стивом Дитко.',
      id: 1,
    },
    { 
      name: 'Анастасия',
      surname: 'Котова',
      position: 'Бухгалтер',
      info: 'Главная героиня серии компьютерных игр Tomb Raider компании Square Enix. Является также персонажем фильмов, мультсериала, книг и комиксов.',
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
