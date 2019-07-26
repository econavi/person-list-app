const config = {
  name: 'people-storage',
}

export default class LocalStorageManager {
  static get() {
    if (this._isExists()) {
      const data = JSON.parse(localStorage.getItem(config.name))
      return data
    }
    
    return undefined
  }
  
  static set(data) {  
    localStorage.setItem(config.name, JSON.stringify(data))
  }  
  
  static _isExists() {
    return localStorage.getItem(config.name) ? true : false
  }  
}
