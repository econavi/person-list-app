import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withAppService } from '../hoc'
import { personLoaded } from '../../actions'

class PersonDetailsPage extends Component {
  updatePerson() {
    const { appService, personLoaded, personId } = this.props
    if (!personId) return
    
    const data = appService.getPerson(+personId)
    personLoaded(data)
  }
  
  componentDidMount() {
    this.updatePerson()
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.personId === prevProps.personId) return
    this.updatePerson()
  }

  render() {
    const { person } = this.props
    
    if (!person) return null
    
    const { name, surname, position } = person
    
    return (
      <div>
        <Link to="/">Назад</Link>
        <h2>Детальная страница</h2>
        <div>
          <span>{name}</span>
          <span>{surname}</span>
          <span>{position}</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ selectedPersonData }) => {
  return {
    person: selectedPersonData,
  }
}

const mapDispatchToProps = {
  personLoaded,
}

export default withAppService()(connect(mapStateToProps, mapDispatchToProps)(PersonDetailsPage))
