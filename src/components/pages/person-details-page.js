import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withAppService } from '../hoc'
import { personLoaded } from '../../actions'

import PersonDetails from '../person-details'

class PersonDetailsPage extends Component {

  componentDidMount() {
    this.updatePerson()
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.personId === prevProps.personId) return
    this.updatePerson()
  }

  updatePerson() {
    const { appService, personLoaded, personId } = this.props
    if (!personId) return
    const data = appService.getPerson(personId)
    personLoaded(data)
  }

  render() {
    const { person } = this.props
    
    if (!person) return null
    
    return (
      <div>
        <h2>Детальная страница</h2>
        <PersonDetails person={person} />
      </div>
    )
  }
}

const mapStateToProps = ({ selectedPersonId, selectedPersonData }) => {
  return {
    person: selectedPersonData,
    personId: selectedPersonId,
  }
}

const mapDispatchToProps = {
  personLoaded,
}

export default withAppService()(connect(mapStateToProps, mapDispatchToProps)(PersonDetailsPage))
