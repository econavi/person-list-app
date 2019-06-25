import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withAppService } from '../hoc'
import { peopleLoaded } from '../../actions'
import PersonListItem from '../person-list-item'

import './person-list.css'

class PersonList extends Component {
  
  componentDidMount() {
    // Получим данные
    const { appService, peopleLoaded } = this.props
    const data = appService.getPeople()
    
    // Передадим данные в Store
    peopleLoaded(data)
  }
  
  render() {
    const { people } = this.props
    
    return (
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Должность</th>
          </tr>
        </thead>
        <tbody>
          {
            people.map((person) => {
              return (
                <tr key={person.id}>
                  <PersonListItem person={person} />
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ people }) => {
  return { people }
}

const mapDispatchToProps = {
  peopleLoaded,
}

export default withAppService()(connect(mapStateToProps, mapDispatchToProps)(PersonList))
