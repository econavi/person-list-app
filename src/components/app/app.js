import React from 'react'
import { Route } from 'react-router-dom'

import { PeoplePage, PersonDetailsPage } from '../pages'
import Modal from '../modal'
import SocBlock from '../soc-block'

import mainLogo from './react-logo.svg'
import './app.css'

const App = () => {
  return (
    <div className="page">
      <header className="page__header container">
        <img className="page__header-logo" src={mainLogo} alt="React Logo" />
      </header>
      <main className="page__main">
        <div className="container">
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
      </main>
      <footer className="page__footer container">
        <SocBlock />
      </footer>
      
      <Modal />
    </div>
  )
}

export default App
