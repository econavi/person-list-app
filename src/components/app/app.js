import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { PeoplePage, PersonDetailsPage } from '../pages'

import './app.css'

class App extends Component {
  render() {  
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
}

const mapStateToProps = ({ selectedPersonId }) => {
  return {
    selectedPersonId,
  }
}

export default connect(mapStateToProps)(App)
