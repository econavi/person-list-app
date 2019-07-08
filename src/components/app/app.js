import React from 'react'
import { Route } from 'react-router-dom'

import { PeoplePage, PersonDetailsPage } from '../pages'

import './app.css'

const App = () => {
  return (
    <div>
      <Route 
        path="/"
        component={PeoplePage}
        exact />
      <Route 
        path={`/people/:id`}
        render={({ match }) => {
          const { id } = match.params
          return <PersonDetailsPage personId={id} />
        }} />
    </div>
  )
}

export default App
