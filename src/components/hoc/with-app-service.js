import React from 'react'
import { AppServiceConsumer } from '../app-service-context'

const withAppService = () => (Wrapped) => {

  return (props) => {
    return (
      <AppServiceConsumer>
        {
          (appService) => {
            return (
              <Wrapped {...props} appService={appService} />
            )
          }
        }
      </AppServiceConsumer>
    );
  }
};

export default withAppService
