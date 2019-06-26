import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { PersonListPage, PersonDetailsPage } from '../pages'

import './app.css'

class App extends Component {
  render() {  
    return (
      <div>
        <PersonListPage />
        <PersonDetailsPage />
      </div>
      // <Switch>
      //   <Route 
      //     path="/"
      //     component={ () => <PersonListPage onAddToPersonList={()=>{console.log(1)}} /> }
      //     exact />
      //   <Route 
      //     path={`/person/`}
      //     component={PersonDetailsPage} />
      // </Switch>
    )
  }
}

const mapStateToProps = ({ selectedPersonId }) => {
  return {
    selectedPersonId,
  }
}

export default connect(mapStateToProps)(App)
