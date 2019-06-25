import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { PersonListPage, DetailPersonPage } from '../pages'

import './app.css'

const App = () => {  
  return (
    <Switch>
      <Route 
        path="/"
        component={PersonListPage}
        exact />
      <Route 
        path={`/person/`}
        component={DetailPersonPage} />
    </Switch>
  )
}

export default App
