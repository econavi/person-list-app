import React from 'react'

const PersonDetails = ({ person }) => {
  const { name, surname, position } = person
  return (
    <div>
      <span>{name}</span>
      <span>{surname}</span>
      <span>{position}</span>
    </div>
  )
}

export default PersonDetails
