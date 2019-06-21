import React from 'react'
import './app.css'

import { withAppService } from '../hoc'

const App = ({ appService }) => {
  
  console.log(appService.getPeople()) // []
  
  return <div>App</div>
}

export default withAppService()(App)
