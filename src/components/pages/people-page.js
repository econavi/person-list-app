import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { withAppService } from '../hoc'
import { peopleLoaded } from '../../actions'

import PersonList from '../person-list'

class PeoplePage extends Component {
  componentDidMount() {
    const { appService, peopleLoaded } = this.props
    const data = appService.getAllPeople()
    peopleLoaded(data)
  }

  onPersonSelected = (id) => {
    const { history } = this.props;
    history.push(`/people/${id}`)
  }

  render() {
    const { people } = this.props
    
    if (!people) return null
    
    return (
      <div>
        <h2>Список сотрудников</h2>
        <PersonList 
          people={people}
          onPersonSelected={this.onPersonSelected} />
      </div>
    )
  }
}

const mapStateToProps = ({ people }) => {
  return {
    people,
  }
}

const mapDispatchToProps = {
  peopleLoaded,
}

export default withRouter(withAppService()(connect(mapStateToProps, mapDispatchToProps)(PeoplePage)))
