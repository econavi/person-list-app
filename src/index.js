import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app'
import ErrorBoundary from './components/error-boundary'
import AppService from './services/app-service'
import { AppServiceProvider } from './components/app-service-context'

import store from './store'

const appService = new AppService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <AppServiceProvider value={appService}>
        <Router basename={process.env.PUBLIC_URL}>
          <App />
        </Router>
      </AppServiceProvider>
    </ErrorBoundary>
  </Provider>, 
  document.getElementById('root')
)
