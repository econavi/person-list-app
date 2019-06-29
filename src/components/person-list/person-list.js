import React from 'react'

import PersonListItem from '../person-list-item'

import './person-list.css'

const PersonList = ({ people, onPersonSelected }) => {  
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
                  onClick={() => { onPersonSelected(person.id) }}>
                <PersonListItem person={person} />
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default PersonList
