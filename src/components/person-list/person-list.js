import React from 'react'

import PersonListItem from '../person-list-item'

import './person-list.css'

const PersonList = ({ people, onPersonSelected }) => {  
  return (
    <div className="table-responsive mt-4 person-list">
      <table className="table table-dark table-hover">
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
    </div>
  )
}

export default PersonList
