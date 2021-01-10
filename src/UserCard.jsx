import React from 'react'

const UserCard = ({ record }) => {
  const { FirstName, LastName, Gender, Email, UserName } = record;
  return (
    <div className='user-card'>
      <strong>{FirstName} {LastName}</strong><br/>
      <em>{UserName}</em>
      <p>{Gender}</p>
      <p>{Email}</p>
    </div>
  )
}

export default UserCard