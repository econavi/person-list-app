import React, { Component } from 'react'
import { connect } from 'react-redux'

import { personSelected } from '../../actions'

import PersonListItem from '../person-list-item'


import './person-list.css'

class PersonList extends Component {
  
  onItemSelected = (id) => {
    const { personSelected } = this.props
    personSelected(id)
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
                <tr key={person.id}
                    onClick={() => { this.onItemSelected(person.id) }}>
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
  return {
    people,
  }
}

const mapDispatchToProps = {
  personSelected,
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList)
