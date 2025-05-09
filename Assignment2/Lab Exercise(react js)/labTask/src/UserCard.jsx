import React from 'react'

const UserCard = ({ name, age, location }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default UserCard
