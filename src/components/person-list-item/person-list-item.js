import React, { Fragment } from 'react'

import './person-list-item.css'

const PersonListItem = ({ person }) => {
  const { name, surname, position } = person
  return (
    <Fragment>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{position}</td>
    </Fragment>
  )
}

export default PersonListItem
