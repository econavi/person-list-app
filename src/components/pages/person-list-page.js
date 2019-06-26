import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withAppService } from '../hoc'
import { peopleLoaded } from '../../actions'

import PersonList from '../person-list'

class PersonListPage extends Component {
  componentDidMount() {
    const { appService, peopleLoaded } = this.props
    const data = appService.getAllPeople()
    peopleLoaded(data)
  }
  
  render() {
    const { people } = this.props
    
    if (!people) {
      return null
    }
    
    return (
      <div>
        <h2>Список сотрудников</h2>
        <PersonList people={people} />
        <button onClick={null}>Добавить</button>
      </div>
    )
  }
}

const mapStateToProps = ({ people }) => {
  return { people }
}

const mapDispatchToProps = {
  peopleLoaded,
}

export default withAppService()(connect(mapStateToProps, mapDispatchToProps)(PersonListPage))
