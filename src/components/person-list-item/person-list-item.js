import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

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

PersonListItem.propTypes = {
  person: PropTypes.object.isRequired,
}

export default PersonListItem
